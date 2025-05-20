<template>
  <AdminLayout>
    <div class="p-6">
      <!-- Customer Info Header -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">{{ customer.name }}</h1>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ customer.email }}</p>
          </div>
          <div class="text-right">
            <p class="text-sm text-gray-500 dark:text-gray-400">Customer ID: {{ customerId }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Member since {{ formatDate(customer.joinDate) }}</p>
          </div>
        </div>
      </div>

      <!-- Document Generation Form -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Generate Document</h2>
        <form @submit.prevent="generateDocument" class="space-y-6">
          <div>
            <label for="document-type" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Document Type</label>
            <select
              id="document-type"
              v-model="selectedDocumentType"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            >
              <option value="">Select a document type</option>
              <option value="contract">Contract</option>
              <option value="quote">Quote</option>
              <option value="invoice">Invoice</option>
              <option value="custom">Custom Letter</option>
            </select>
          </div>

          <div>
            <label for="document-content" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Document Content</label>
            <textarea
              id="document-content"
              v-model="documentContent"
              rows="10"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              :placeholder="getPlaceholderText"
              required
            ></textarea>
          </div>

          <div class="flex justify-end">
            <button
              type="submit"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Generate PDF
            </button>
          </div>
        </form>
      </div>

      <!-- Previous Documents Table -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">Previously Generated Documents</h2>
        </div>
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Document Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Type
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Generated Date
              </th>
              <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="doc in previousDocuments" :key="doc.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                {{ doc.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                {{ doc.type }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                {{ formatDate(doc.generatedDate) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  @click="downloadDocument(doc)"
                  class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Download
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
import { useRoute } from 'vue-router'

defineOptions({
  name: 'GenerateDocuments'
})

const route = useRoute()
const customerId = computed(() => route.params.id)

// Mock customer data
const customer = ref({
  id: customerId.value,
  name: 'John Doe',
  email: 'john.doe@example.com',
  joinDate: '2024-01-15'
})

// Document generation state
const selectedDocumentType = ref('')
const documentContent = ref('')

// Mock previous documents
const previousDocuments = ref([
  {
    id: 1,
    name: 'Contract-2024-001',
    type: 'Contract',
    generatedDate: '2024-03-01'
  },
  {
    id: 2,
    name: 'Quote-2024-002',
    type: 'Quote',
    generatedDate: '2024-03-05'
  }
])

// Computed placeholder text based on document type
const getPlaceholderText = computed(() => {
  switch (selectedDocumentType.value) {
    case 'contract':
      return 'Enter contract terms and conditions...'
    case 'quote':
      return 'Enter quote details and pricing...'
    case 'invoice':
      return 'Enter invoice details and line items...'
    case 'custom':
      return 'Enter your custom letter content...'
    default:
      return 'Select a document type to get started...'
  }
})

// Format date helper
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

// Generate document handler
const generateDocument = async () => {
  try {
    // TODO: Implement actual PDF generation
    alert('PDF Generated!')
    
    // Add to previous documents
    previousDocuments.value.unshift({
      id: Date.now(),
      name: `${selectedDocumentType.value}-${new Date().toISOString().split('T')[0]}`,
      type: selectedDocumentType.value,
      generatedDate: new Date().toISOString().split('T')[0]
    })
    
    // Reset form
    selectedDocumentType.value = ''
    documentContent.value = ''
  } catch (error) {
    console.error('Error generating document:', error)
    alert('Error generating document. Please try again.')
  }
}

interface Document {
  id: number
  name: string
  type: string
  generatedDate: string
}

// Download document handler
const downloadDocument = (doc: Document) => {
  // TODO: Implement actual document download
  console.log('Downloading document:', doc)
  alert('Document download started!')
}
</script> 