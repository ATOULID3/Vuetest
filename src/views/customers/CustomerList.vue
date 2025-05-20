<template>
  <AdminLayout>
  <div class="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
    <div class="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
      <div class="flex w-full flex-wrap gap-3 sm:gap-5">
        <div class="flex min-w-47.5">
          <h4 class="text-xl font-semibold text-black dark:text-white">
            Customers
          </h4>
        </div>
        <div class="flex min-w-47.5">
          <button class="inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-white hover:bg-opacity-90">
            Add Customer
          </button>
        </div>
      </div>
    </div>

    <!-- Customer List Table -->
    <div class="mt-4">
      <div class="max-w-full overflow-x-auto">
        <table class="w-full table-auto">
          <thead>
            <tr class="bg-gray-2 text-left dark:bg-meta-4">
              <th class="py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Customer Name
              </th>
              <th class="py-4 px-4 font-medium text-black dark:text-white">
                Email
              </th>
              <th class="py-4 px-4 font-medium text-black dark:text-white">
                Phone
              </th>
              <th class="py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th class="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in customers" :key="customer.id">
              <td class="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 rounded-full">
                    <img :src="customer.avatar" :alt="customer.name" />
                  </div>
                  <div>
                    <h5 class="font-medium text-black dark:text-white">
                      {{ customer.name }}
                    </h5>
                    <p class="text-sm">{{ customer.company }}</p>
                  </div>
                </div>
              </td>
              <td class="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                {{ customer.email }}
              </td>
              <td class="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                {{ customer.phone }}
              </td>
              <td class="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <span
                  :class="[
                    'inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium',
                    customer.status === 'Active'
                      ? 'bg-success text-success'
                      : 'bg-danger text-danger',
                  ]"
                >
                  {{ customer.status }}
                </span>
              </td>
              <td class="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div class="flex items-center space-x-3.5">
                  <button class="hover:text-primary">
                    <svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.17812 8.99981 3.17812C14.5686 3.17812 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z" fill=""/>
                      <path d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z" fill=""/>
                    </svg>
                  </button>
                  <button class="hover:text-primary">
                    <svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z" fill=""/>
                      <path d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.33824 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.18439 13.7257 7.79064 13.4726 7.53752C13.2195 7.28439 12.8257 7.28439 12.5726 7.53752L9.64762 10.4063V2.1094C9.64762 1.77189 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.42887 7.53752C5.17574 7.28439 4.78199 7.28439 4.52887 7.53752C4.27574 7.79064 4.27574 8.18439 4.52887 8.43752L8.55074 12.3469Z" fill=""/>
                    </svg>
                  </button>
                  <button class="hover:text-primary">
                    <svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C2.40352 2.47502 1.47852 3.40002 1.47852 5.21565V13.9969C1.47852 15.8125 2.40352 16.7375 4.21914 16.7375H13.7535C15.5691 16.7375 16.4941 15.8125 16.4941 13.9969V5.21565C16.4941 3.40002 15.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM14.5223 13.9969C14.5223 14.9531 13.8348 15.6406 12.8785 15.6406H4.21914C3.26289 15.6406 2.57539 14.9531 2.57539 13.9969V5.21565C2.57539 4.2594 3.26289 3.5719 4.21914 3.5719H13.7535C14.7098 3.5719 15.3973 4.2594 15.3973 5.21565V13.9969H14.5223Z" fill=""/>
                      <path d="M9.00039 13.3313C9.47852 13.3313 9.87227 12.9375 9.87227 12.4594V8.52189C9.87227 8.04376 9.47852 7.65001 9.00039 7.65001C8.52227 7.65001 8.12852 8.04376 8.12852 8.52189V12.4594C8.12852 12.9375 8.52227 13.3313 9.00039 13.3313Z" fill=""/>
                      <path d="M11.2502 13.3313C11.7283 13.3313 12.1221 12.9375 12.1221 12.4594V8.52189C12.1221 8.04376 11.7283 7.65001 11.2502 7.65001C10.7721 7.65001 10.3783 8.04376 10.3783 8.52189V12.4594C10.3783 12.9375 10.7721 13.3313 11.2502 13.3313Z" fill=""/>
                      <path d="M6.72245 13.3313C7.20058 13.3313 7.59433 12.9375 7.59433 12.4594V8.52189C7.59433 8.04376 7.20058 7.65001 6.72245 7.65001C6.24433 7.65001 5.85058 8.04376 5.85058 8.52189V12.4594C5.85058 12.9375 6.24433 13.3313 6.72245 13.3313Z" fill=""/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</AdminLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'

const customers = ref([
  {
    id: 1,
    name: 'John Doe',
    company: 'Acme Inc',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    status: 'Active',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe'
  },
  {
    id: 2,
    name: 'Jane Smith',
    company: 'XYZ Corp',
    email: 'jane@example.com',
    phone: '+1 234 567 891',
    status: 'Inactive',
    avatar: 'https://ui-avatars.com/api/?name=Jane+Smith'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    company: 'ABC Ltd',
    email: 'bob@example.com',
    phone: '+1 234 567 892',
    status: 'Active',
    avatar: 'https://ui-avatars.com/api/?name=Bob+Johnson'
  }
])
</script> 