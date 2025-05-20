<template>
  <AdminLayout>
  <div class="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
    <div class="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
      <div class="flex w-full flex-wrap gap-3 sm:gap-5">
        <div class="flex min-w-47.5">
          <h4 class="text-xl font-semibold text-black dark:text-white">
            Deal Pipeline
          </h4>
        </div>
        <div class="flex min-w-47.5">
          <button class="inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-white hover:bg-opacity-90">
            Add Deal
          </button>
        </div>
      </div>
    </div>

    <!-- Pipeline Board -->
    <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <!-- Lead -->
      <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div class="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 class="font-medium text-black dark:text-white">
            Lead
          </h3>
        </div>
        <div class="p-6.5">
          <div class="mb-4 flex items-center justify-between">
            <span class="text-sm font-medium">2 Deals</span>
            <span class="text-sm font-medium">$50,000</span>
          </div>
          <div class="space-y-4">
            <div v-for="deal in leads" :key="deal.id" class="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-medium text-black dark:text-white">
                  {{ deal.title }}
                </h4>
                <span class="text-sm font-medium">${{ deal.amount }}</span>
              </div>
              <p class="mt-2 text-sm text-gray-500">{{ deal.company }}</p>
              <div class="mt-4 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <img :src="deal.avatar" :alt="deal.owner" class="h-6 w-6 rounded-full" />
                  <span class="text-sm">{{ deal.owner }}</span>
                </div>
                <span class="text-sm text-gray-500">{{ deal.daysLeft }} days left</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Qualified -->
      <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div class="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 class="font-medium text-black dark:text-white">
            Qualified
          </h3>
        </div>
        <div class="p-6.5">
          <div class="mb-4 flex items-center justify-between">
            <span class="text-sm font-medium">3 Deals</span>
            <span class="text-sm font-medium">$75,000</span>
          </div>
          <div class="space-y-4">
            <div v-for="deal in qualified" :key="deal.id" class="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-medium text-black dark:text-white">
                  {{ deal.title }}
                </h4>
                <span class="text-sm font-medium">${{ deal.amount }}</span>
              </div>
              <p class="mt-2 text-sm text-gray-500">{{ deal.company }}</p>
              <div class="mt-4 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <img :src="deal.avatar" :alt="deal.owner" class="h-6 w-6 rounded-full" />
                  <span class="text-sm">{{ deal.owner }}</span>
                </div>
                <span class="text-sm text-gray-500">{{ deal.daysLeft }} days left</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Proposal -->
      <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div class="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 class="font-medium text-black dark:text-white">
            Proposal
          </h3>
        </div>
        <div class="p-6.5">
          <div class="mb-4 flex items-center justify-between">
            <span class="text-sm font-medium">2 Deals</span>
            <span class="text-sm font-medium">$45,000</span>
          </div>
          <div class="space-y-4">
            <div v-for="deal in proposals" :key="deal.id" class="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-medium text-black dark:text-white">
                  {{ deal.title }}
                </h4>
                <span class="text-sm font-medium">${{ deal.amount }}</span>
              </div>
              <p class="mt-2 text-sm text-gray-500">{{ deal.company }}</p>
              <div class="mt-4 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <img :src="deal.avatar" :alt="deal.owner" class="h-6 w-6 rounded-full" />
                  <span class="text-sm">{{ deal.owner }}</span>
                </div>
                <span class="text-sm text-gray-500">{{ deal.daysLeft }} days left</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Negotiation -->
      <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div class="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 class="font-medium text-black dark:text-white">
            Negotiation
          </h3>
        </div>
        <div class="p-6.5">
          <div class="mb-4 flex items-center justify-between">
            <span class="text-sm font-medium">1 Deal</span>
            <span class="text-sm font-medium">$30,000</span>
          </div>
          <div class="space-y-4">
            <div v-for="deal in negotiations" :key="deal.id" class="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-medium text-black dark:text-white">
                  {{ deal.title }}
                </h4>
                <span class="text-sm font-medium">${{ deal.amount }}</span>
              </div>
              <p class="mt-2 text-sm text-gray-500">{{ deal.company }}</p>
              <div class="mt-4 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <img :src="deal.avatar" :alt="deal.owner" class="h-6 w-6 rounded-full" />
                  <span class="text-sm">{{ deal.owner }}</span>
                </div>
                <span class="text-sm text-gray-500">{{ deal.daysLeft }} days left</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</AdminLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'

const leads = ref([
  {
    id: 1,
    title: 'Website Redesign',
    company: 'Acme Inc',
    amount: '25,000',
    owner: 'John Doe',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe',
    daysLeft: 5
  },
  {
    id: 2,
    title: 'Mobile App Development',
    company: 'XYZ Corp',
    amount: '25,000',
    owner: 'Jane Smith',
    avatar: 'https://ui-avatars.com/api/?name=Jane+Smith',
    daysLeft: 3
  }
])

const qualified = ref([
  {
    id: 3,
    title: 'E-commerce Platform',
    company: 'ABC Ltd',
    amount: '30,000',
    owner: 'Bob Johnson',
    avatar: 'https://ui-avatars.com/api/?name=Bob+Johnson',
    daysLeft: 7
  },
  {
    id: 4,
    title: 'CRM Implementation',
    company: 'Tech Solutions',
    amount: '25,000',
    owner: 'Alice Brown',
    avatar: 'https://ui-avatars.com/api/?name=Alice+Brown',
    daysLeft: 4
  },
  {
    id: 5,
    title: 'Cloud Migration',
    company: 'Global Services',
    amount: '20,000',
    owner: 'Mike Wilson',
    avatar: 'https://ui-avatars.com/api/?name=Mike+Wilson',
    daysLeft: 6
  }
])

const proposals = ref([
  {
    id: 6,
    title: 'Security Audit',
    company: 'Secure Systems',
    amount: '25,000',
    owner: 'Sarah Davis',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Davis',
    daysLeft: 2
  },
  {
    id: 7,
    title: 'Data Analytics',
    company: 'Data Corp',
    amount: '20,000',
    owner: 'Tom Harris',
    avatar: 'https://ui-avatars.com/api/?name=Tom+Harris',
    daysLeft: 4
  }
])

const negotiations = ref([
  {
    id: 8,
    title: 'AI Integration',
    company: 'Smart Tech',
    amount: '30,000',
    owner: 'Lisa Anderson',
    avatar: 'https://ui-avatars.com/api/?name=Lisa+Anderson',
    daysLeft: 1
  }
])
</script> 