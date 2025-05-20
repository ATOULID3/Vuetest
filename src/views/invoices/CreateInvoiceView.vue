<template>
  <AdminLayout>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Create Invoice</h1>
      <button
        @click="saveAsDraft"
        class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
      >
        Save as Draft
      </button>
    </div>

    <form @submit.prevent="createInvoice" class="space-y-6">
      <!-- Client Information -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Client Information</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="client" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Client</label>
            <select
              id="client"
              v-model="invoice.clientId"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            >
              <option value="">Select a client</option>
              <option v-for="client in clients" :key="client.id" :value="client.id">
                {{ client.name }}
              </option>
            </select>
          </div>
          <div>
            <label for="deal" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Related Deal (Optional)</label>
            <select
              id="deal"
              v-model="invoice.dealId"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Select a deal</option>
              <option v-for="deal in deals" :key="deal.id" :value="deal.id">
                {{ deal.name }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Invoice Details -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Invoice Details</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label for="invoice-date" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Invoice Date</label>
            <input
              type="date"
              id="invoice-date"
              v-model="invoice.date"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label for="due-date" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Due Date</label>
            <input
              type="date"
              id="due-date"
              v-model="invoice.dueDate"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label for="payment-terms" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Payment Terms</label>
            <select
              id="payment-terms"
              v-model="invoice.paymentTerms"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            >
              <option value="net15">Net 15</option>
              <option value="net30">Net 30</option>
              <option value="net45">Net 45</option>
              <option value="net60">Net 60</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Line Items -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">Line Items</h2>
          <button
            type="button"
            @click="addLineItem"
            class="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-900 dark:text-indigo-100 dark:hover:bg-indigo-800"
          >
            Add Item
          </button>
        </div>

        <div class="space-y-4">
          <div v-for="(item, index) in invoice.items" :key="index" class="grid grid-cols-12 gap-4 items-end">
            <div class="col-span-4">
              <label :for="'description-' + index" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
              <input
                :id="'description-' + index"
                v-model="item.description"
                type="text"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div class="col-span-2">
              <label :for="'quantity-' + index" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Quantity</label>
              <input
                :id="'quantity-' + index"
                v-model.number="item.quantity"
                type="number"
                min="1"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div class="col-span-2">
              <label :for="'rate-' + index" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Rate</label>
              <input
                :id="'rate-' + index"
                v-model.number="item.rate"
                type="number"
                min="0"
                step="0.01"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div class="col-span-2">
              <label :for="'amount-' + index" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Amount</label>
              <input
                :id="'amount-' + index"
                :value="item.quantity * item.rate"
                type="text"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                disabled
              />
            </div>
            <div class="col-span-2">
              <button
                type="button"
                @click="removeLineItem(index)"
                class="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-900 dark:text-red-100 dark:hover:bg-red-800"
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        <!-- Totals -->
        <div class="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
          <div class="flex justify-end space-x-4">
            <div class="text-right">
              <p class="text-sm text-gray-500 dark:text-gray-400">Subtotal</p>
              <p class="text-lg font-medium text-gray-900 dark:text-white">${{ subtotal.toFixed(2) }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-500 dark:text-gray-400">Tax ({{ taxRate }}%)</p>
              <p class="text-lg font-medium text-gray-900 dark:text-white">${{ tax.toFixed(2) }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-500 dark:text-gray-400">Total</p>
              <p class="text-lg font-medium text-gray-900 dark:text-white">${{ total.toFixed(2) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Notes -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Notes</h2>
        <textarea
          v-model="invoice.notes"
          rows="4"
          class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Add any additional notes or terms..."
        ></textarea>
      </div>

      <!-- Submit Buttons -->
      <div class="flex justify-end space-x-4">
        <button
          type="button"
          @click="cancel"
          class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Invoice
        </button>
      </div>
    </form>
  </div>
</AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '@/components/layout/AdminLayout.vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'CreateInvoiceView'
})

const router = useRouter()

interface Client {
  id: number
  name: string
}

interface Deal {
  id: number
  name: string
}

interface LineItem {
  description: string
  quantity: number
  rate: number
}

interface Invoice {
  clientId: string
  dealId: string
  date: string
  dueDate: string
  paymentTerms: string
  items: LineItem[]
  notes: string
}

// Mock data - replace with actual API calls
const clients = ref<Client[]>([
  { id: 1, name: 'Acme Corp' },
  { id: 2, name: 'Globex Inc' },
  { id: 3, name: 'Stark Industries' }
])

const deals = ref<Deal[]>([
  { id: 1, name: 'Website Redesign' },
  { id: 2, name: 'Mobile App Development' },
  { id: 3, name: 'Cloud Migration' }
])

const invoice = ref<Invoice>({
  clientId: '',
  dealId: '',
  date: new Date().toISOString().split('T')[0],
  dueDate: '',
  paymentTerms: 'net30',
  items: [
    {
      description: '',
      quantity: 1,
      rate: 0
    }
  ],
  notes: ''
})

const taxRate = 10 // 10% tax rate

const subtotal = computed(() => {
  return invoice.value.items.reduce((sum, item) => sum + (item.quantity * item.rate), 0)
})

const tax = computed(() => {
  return subtotal.value * (taxRate / 100)
})

const total = computed(() => {
  return subtotal.value + tax.value
})

const addLineItem = () => {
  invoice.value.items.push({
    description: '',
    quantity: 1,
    rate: 0
  })
}

const removeLineItem = (index: number) => {
  if (invoice.value.items.length > 1) {
    invoice.value.items.splice(index, 1)
  }
}

const createInvoice = async () => {
  try {
    // TODO: Implement API call to create invoice
    console.log('Creating invoice:', invoice.value)
    router.push('/invoices')
  } catch (error) {
    console.error('Error creating invoice:', error)
  }
}

const saveAsDraft = async () => {
  try {
    // TODO: Implement API call to save as draft
    console.log('Saving as draft:', invoice.value)
    router.push('/invoices')
  } catch (error) {
    console.error('Error saving draft:', error)
  }
}

const cancel = () => {
  router.push('/invoices')
}
</script> 