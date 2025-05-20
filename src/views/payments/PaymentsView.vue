<template>
  <AdminLayout>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Payments Received</h1>
      <button
        @click="showAddPaymentModal = true"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Record Payment
      </button>
    </div>

    <!-- Filters -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label for="payment-method" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Payment Method</label>
          <select
            id="payment-method"
            v-model="filters.method"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">All Methods</option>
            <option value="credit_card">Credit Card</option>
            <option value="bank_transfer">Bank Transfer</option>
            <option value="paypal">PayPal</option>
            <option value="check">Check</option>
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
            placeholder="Search payments..."
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

    <!-- Payments Table -->
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
              Method
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
          <tr v-for="payment in filteredPayments" :key="payment.id">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
              {{ payment.invoiceNumber }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              {{ payment.client }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              ${{ payment.amount.toFixed(2) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              {{ formatDate(payment.date) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              {{ formatPaymentMethod(payment.method) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                :class="[
                  'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                  {
                    'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100': payment.status === 'completed',
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100': payment.status === 'pending',
                    'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100': payment.status === 'failed'
                  }
                ]"
              >
                {{ payment.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                @click="viewPayment(payment)"
                class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                View Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add Payment Modal -->
    <div v-if="showAddPaymentModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Record Payment</h2>
        <form @submit.prevent="recordPayment" class="space-y-4">
          <div>
            <label for="invoice" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Invoice</label>
            <select
              id="invoice"
              v-model="newPayment.invoiceId"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            >
              <option value="">Select an invoice</option>
              <option v-for="invoice in unpaidInvoices" :key="invoice.id" :value="invoice.id">
                {{ invoice.number }} - {{ invoice.client }} (${{ invoice.amount.toFixed(2) }})
              </option>
            </select>
          </div>
          <div>
            <label for="amount" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Amount</label>
            <input
              type="number"
              id="amount"
              v-model.number="newPayment.amount"
              step="0.01"
              min="0"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label for="payment-method" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Payment Method</label>
            <select
              id="payment-method"
              v-model="newPayment.method"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            >
              <option value="">Select a method</option>
              <option value="credit_card">Credit Card</option>
              <option value="bank_transfer">Bank Transfer</option>
              <option value="paypal">PayPal</option>
              <option value="check">Check</option>
            </select>
          </div>
          <div>
            <label for="payment-date" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Payment Date</label>
            <input
              type="date"
              id="payment-date"
              v-model="newPayment.date"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label for="notes" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Notes</label>
            <textarea
              id="notes"
              v-model="newPayment.notes"
              rows="3"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            ></textarea>
          </div>
          <div class="flex justify-end space-x-4">
            <button
              type="button"
              @click="showAddPaymentModal = false"
              class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Record Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '@/components/layout/AdminLayout.vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'PaymentsView'
})

const router = useRouter()

interface Payment {
  id: number
  invoiceNumber: string
  client: string
  amount: number
  date: string
  method: string
  status: 'completed' | 'pending' | 'failed'
}

interface Invoice {
  id: number
  number: string
  client: string
  amount: number
  status: string
}

// Mock data - replace with actual API calls
const payments = ref<Payment[]>([
  {
    id: 1,
    invoiceNumber: 'INV-001',
    client: 'Acme Corp',
    amount: 1500.00,
    date: '2024-03-01',
    method: 'credit_card',
    status: 'completed'
  },
  {
    id: 2,
    invoiceNumber: 'INV-002',
    client: 'Globex Inc',
    amount: 2750.00,
    date: '2024-03-05',
    method: 'bank_transfer',
    status: 'pending'
  }
])

const unpaidInvoices = ref<Invoice[]>([
  {
    id: 1,
    number: 'INV-003',
    client: 'Stark Industries',
    amount: 5000.00,
    status: 'sent'
  }
])

const filters = ref({
  method: '',
  dateRange: '',
  search: ''
})

const showAddPaymentModal = ref(false)

const newPayment = ref({
  invoiceId: '',
  amount: 0,
  method: '',
  date: new Date().toISOString().split('T')[0],
  notes: ''
})

const filteredPayments = computed(() => {
  return payments.value.filter(payment => {
    if (filters.value.method && payment.method !== filters.value.method) return false
    if (filters.value.dateRange && payment.date < filters.value.dateRange) return false
    if (filters.value.search) {
      const searchTerm = filters.value.search.toLowerCase()
      return (
        payment.invoiceNumber.toLowerCase().includes(searchTerm) ||
        payment.client.toLowerCase().includes(searchTerm)
      )
    }
    return true
  })
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

const formatPaymentMethod = (method: string) => {
  return method.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

const resetFilters = () => {
  filters.value = {
    method: '',
    dateRange: '',
    search: ''
  }
}

const viewPayment = (payment: Payment) => {
  // TODO: Implement payment details view
  console.log('Viewing payment:', payment)
}

const recordPayment = async () => {
  try {
    // TODO: Implement API call to record payment
    console.log('Recording payment:', newPayment.value)
    showAddPaymentModal.value = false
    // Refresh payments list
  } catch (error) {
    console.error('Error recording payment:', error)
  }
}
</script> 