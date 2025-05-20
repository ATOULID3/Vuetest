<template>
  <AdminLayout>
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Customer Documents</h1>
        <div class="flex space-x-4">
          <div class="relative">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search customers..."
              class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <select
            v-model="documentTypeFilter"
            class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">All Document Types</option>
            <option value="contract">Contract</option>
            <option value="quote">Quote</option>
            <option value="invoice">Invoice</option>
            <option value="custom">Custom Letter</option>
          </select>
        </div>
      </div>

      <!-- Customers List -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Customer
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Total Documents
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Last Generated
              </th>
              <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="customer in filteredCustomers" :key="customer.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <div class="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                      <span class="text-indigo-600 dark:text-indigo-300 font-medium">
                        {{ getInitials(customer.name) }}
                      </span>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900 dark:text-white">
                      {{ customer.name }}
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      ID: {{ customer.id }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                {{ customer.email }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                {{ customer.totalDocuments }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                {{ formatDate(customer.lastGenerated) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <router-link
                  :to="`/customers/${customer.id}/documents`"
                  class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-4"
                >
                  View Documents
                </router-link>
                <router-link
                  :to="`/customers/${customer.id}/documents`"
                  class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Generate New
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '@/components/layout/AdminLayout.vue'
import { ref, computed } from 'vue'

defineOptions({
  name: 'CustomerDocuments'
})

interface Customer {
  id: number
  name: string
  email: string
  totalDocuments: number
  lastGenerated: string
  documentTypes: string[]
}

// Mock data - replace with actual API call
const customers = ref<Customer[]>([
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    totalDocuments: 5,
    lastGenerated: '2024-03-10',
    documentTypes: ['contract', 'quote']
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    totalDocuments: 3,
    lastGenerated: '2024-03-08',
    documentTypes: ['invoice', 'custom']
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    totalDocuments: 7,
    lastGenerated: '2024-03-12',
    documentTypes: ['contract', 'invoice', 'quote']
  }
])

const searchQuery = ref('')
const documentTypeFilter = ref('')

const filteredCustomers = computed(() => {
  return customers.value.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesType = !documentTypeFilter.value || customer.documentTypes.includes(documentTypeFilter.value)
    return matchesSearch && matchesType
  })
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
}
</script> 