<template>
  <AdminLayout>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Invoices</h1>
      <router-link
        to="/invoices/create"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Create Invoice
      </router-link>
    </div>

    <!-- Filters -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label for="status" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
          <select
            id="status"
            v-model="filters.status"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">All</option>
            <option value="draft">Draft</option>
            <option value="sent">Sent</option>
            <option value="paid">Paid</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>
        <div>
          <label for="date-range" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Date Range</label>
          <input
            type="date"
            id="date-range"
            v-model="filters.dateRange"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label for="search" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Search</label>
          <input
            type="text"
            id="search"
            v-model="filters.search"
            placeholder="Search invoices..."
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div class="flex items-end">
          <button
            @click="resetFilters"
            class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>

    <!-- Invoices Table -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead class="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Invoice #
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Client
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Amount
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Due Date
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          <tr v-for="invoice in filteredInvoices" :key="invoice.id">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
              {{ invoice.number }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              {{ invoice.client }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              ${{ invoice.amount.toFixed(2) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              {{ formatDate(invoice.date) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              {{ formatDate(invoice.dueDate) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                :class="[
                  'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                  {
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100': invoice.status === 'draft',
                    'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100': invoice.status === 'sent',
                    'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100': invoice.status === 'paid',
                    'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100': invoice.status === 'overdue'
                  }
                ]"
              >
                {{ invoice.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                @click="viewInvoice(invoice)"
                class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-4"
              >
                View
              </button>
              <button
                @click="editInvoice(invoice)"
                class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Edit
              </button>
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
import { useRouter } from 'vue-router'

defineOptions({
  name: 'InvoicesListView'
})

const router = useRouter()

interface Invoice {
  id: number
  number: string
  client: string
  amount: number
  date: string
  dueDate: string
  status: 'draft' | 'sent' | 'paid' | 'overdue'
}

// Mock data - replace with actual API call
const invoices = ref<Invoice[]>([
  {
    id: 1,
    number: 'INV-001',
    client: 'Acme Corp',
    amount: 1500.00,
    date: '2024-03-01',
    dueDate: '2024-03-31',
    status: 'paid'
  },
  {
    id: 2,
    number: 'INV-002',
    client: 'Globex Inc',
    amount: 2750.00,
    date: '2024-03-05',
    dueDate: '2024-04-05',
    status: 'sent'
  },
  {
    id: 3,
    number: 'INV-003',
    client: 'Stark Industries',
    amount: 5000.00,
    date: '2024-03-10',
    dueDate: '2024-04-10',
    status: 'draft'
  }
])

const filters = ref({
  status: '',
  dateRange: '',
  search: ''
})

const filteredInvoices = computed(() => {
  return invoices.value.filter(invoice => {
    if (filters.value.status && invoice.status !== filters.value.status) return false
    if (filters.value.dateRange && invoice.date < filters.value.dateRange) return false
    if (filters.value.search) {
      const searchTerm = filters.value.search.toLowerCase()
      return (
        invoice.number.toLowerCase().includes(searchTerm) ||
        invoice.client.toLowerCase().includes(searchTerm)
      )
    }
    return true
  })
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

const resetFilters = () => {
  filters.value = {
    status: '',
    dateRange: '',
    search: ''
  }
}

const viewInvoice = (invoice: Invoice) => {
  router.push(`/invoices/${invoice.id}`)
}

const editInvoice = (invoice: Invoice) => {
  router.push(`/invoices/${invoice.id}/edit`)
}
</script> 