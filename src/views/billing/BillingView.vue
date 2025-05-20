<template>
  <AdminLayout>
  <div class="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
    <div class="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
      <div class="flex w-full flex-wrap gap-3 sm:gap-5">
        <div class="flex min-w-47.5">
          <h4 class="text-xl font-semibold text-black dark:text-white">
            Billing
          </h4>
        </div>
      </div>
    </div>

    <!-- Current Plan -->
    <div class="mt-4">
      <h5 class="mb-4 text-lg font-semibold text-black dark:text-white">
        Current Plan
      </h5>
      <div class="rounded-lg border border-stroke bg-gray-2 p-6 dark:border-strokedark dark:bg-meta-4">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h6 class="text-xl font-medium text-black dark:text-white">
              Pro Plan
            </h6>
            <p class="mt-1 text-sm text-gray-500">
              $29/month • Billed monthly
            </p>
          </div>
          <div class="mt-4 md:mt-0">
            <button class="inline-flex items-center justify-center rounded-md border border-primary py-2 px-6 text-primary hover:bg-primary hover:text-white">
              Change Plan
            </button>
          </div>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div class="rounded-lg border border-stroke bg-white p-4 dark:border-strokedark dark:bg-boxdark">
            <h6 class="font-medium text-black dark:text-white">
              Next Billing Date
            </h6>
            <p class="mt-2 text-sm text-gray-500">
              March 1, 2024
            </p>
          </div>
          <div class="rounded-lg border border-stroke bg-white p-4 dark:border-strokedark dark:bg-boxdark">
            <h6 class="font-medium text-black dark:text-white">
              Payment Method
            </h6>
            <p class="mt-2 text-sm text-gray-500">
              Visa ending in 4242
            </p>
          </div>
          <div class="rounded-lg border border-stroke bg-white p-4 dark:border-strokedark dark:bg-boxdark">
            <h6 class="font-medium text-black dark:text-white">
              Billing Address
            </h6>
            <p class="mt-2 text-sm text-gray-500">
              123 Main St, City, State 12345
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Billing History -->
    <div class="mt-8">
      <h5 class="mb-4 text-lg font-semibold text-black dark:text-white">
        Billing History
      </h5>
      <div class="rounded-lg border border-stroke dark:border-strokedark">
        <div class="grid grid-cols-4 border-b border-stroke py-4 px-6 dark:border-strokedark">
          <div class="col-span-2">
            <h6 class="font-medium text-black dark:text-white">
              Description
            </h6>
          </div>
          <div>
            <h6 class="font-medium text-black dark:text-white">
              Date
            </h6>
          </div>
          <div>
            <h6 class="font-medium text-black dark:text-white">
              Amount
            </h6>
          </div>
        </div>
        <div
          v-for="(invoice, index) in invoices"
          :key="index"
          class="grid grid-cols-4 border-b border-stroke py-4 px-6 dark:border-strokedark"
        >
          <div class="col-span-2">
            <h6 class="font-medium text-black dark:text-white">
              {{ invoice.description }}
            </h6>
            <p class="text-sm text-gray-500">
              {{ invoice.id }}
            </p>
          </div>
          <div>
            <p class="text-sm text-gray-500">
              {{ invoice.date }}
            </p>
          </div>
          <div>
            <p class="font-medium text-black dark:text-white">
              {{ invoice.amount }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Payment Methods -->
    <div class="mt-8">
      <div class="flex items-center justify-between">
        <h5 class="text-lg font-semibold text-black dark:text-white">
          Payment Methods
        </h5>
        <button class="inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-white hover:bg-opacity-90">
          Add Payment Method
        </button>
      </div>
      <div class="mt-4 space-y-4">
        <div
          v-for="(method, index) in paymentMethods"
          :key="index"
          class="flex items-center justify-between rounded-lg border border-stroke p-4 dark:border-strokedark"
        >
          <div class="flex items-center gap-4">
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-10">
              <svg class="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18ZM4 0H20V2H4V0ZM4 22H20V24H4V22ZM12 12C10.34 12 9 13.34 9 15C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15C15 13.34 13.66 12 12 12ZM12 16C11.45 16 11 15.55 11 15C11 14.45 11.45 14 12 14C12.55 14 13 14.45 13 15C13 15.55 12.55 16 12 16Z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h6 class="font-medium text-black dark:text-white">
                {{ method.type }} ending in {{ method.last4 }}
              </h6>
              <p class="text-sm text-gray-500">
                Expires {{ method.expiry }}
              </p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button class="rounded-md border border-stroke px-3 py-1 text-sm hover:border-primary hover:text-primary dark:border-strokedark">
              Edit
            </button>
            <button class="rounded-md border border-danger px-3 py-1 text-sm text-danger hover:bg-danger hover:text-white dark:border-danger">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Billing Address -->
    <div class="mt-8">
      <h5 class="mb-4 text-lg font-semibold text-black dark:text-white">
        Billing Address
      </h5>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label class="mb-2.5 block text-black dark:text-white">
            Street Address
          </label>
          <input
            type="text"
            value="123 Main St"
            class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
          />
        </div>
        <div>
          <label class="mb-2.5 block text-black dark:text-white">
            City
          </label>
          <input
            type="text"
            value="New York"
            class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
          />
        </div>
        <div>
          <label class="mb-2.5 block text-black dark:text-white">
            State
          </label>
          <input
            type="text"
            value="NY"
            class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
          />
        </div>
        <div>
          <label class="mb-2.5 block text-black dark:text-white">
            ZIP Code
          </label>
          <input
            type="text"
            value="10001"
            class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
          />
        </div>
      </div>
      <div class="mt-6 flex justify-end">
        <button class="inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-white hover:bg-opacity-90">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</AdminLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'

const invoices = ref([
  {
    id: 'INV-001',
    description: 'Pro Plan - Monthly',
    date: 'Feb 1, 2024',
    amount: '$29.00'
  },
  {
    id: 'INV-002',
    description: 'Pro Plan - Monthly',
    date: 'Jan 1, 2024',
    amount: '$29.00'
  },
  {
    id: 'INV-003',
    description: 'Pro Plan - Monthly',
    date: 'Dec 1, 2023',
    amount: '$29.00'
  }
])

const paymentMethods = ref([
  {
    type: 'Visa',
    last4: '4242',
    expiry: '12/24'
  },
  {
    type: 'Mastercard',
    last4: '5555',
    expiry: '09/25'
  }
])
</script> 