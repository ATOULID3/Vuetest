<template>
  <AdminLayout>
    <div class="p-4 md:p-6 2xl:p-10">
      <!-- Header -->
      <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 class="text-title-md2 font-bold text-black dark:text-white">
            Clients
          </h2>
          <p class="text-sm text-gray-500">Manage your client relationships</p>
        </div>
        <div class="flex items-center space-x-3">
          <div class="relative">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search clients..."
              class="w-full rounded-lg border border-stroke bg-transparent py-2.5 pl-10 pr-4 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            <span class="absolute left-3 top-1/2 -translate-y-1/2">
              <svg
                class="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7 14.3L12.3 10.9C13.4 9.5 14 7.8 14 6C14 2.7 11.3 0 8 0C4.7 0 2 2.7 2 6C2 9.3 4.7 12 8 12C9.8 12 11.5 11.4 12.9 10.3L16.3 13.7C16.5 13.9 16.8 14 17 14C17.2 14 17.5 13.9 17.7 13.7C18.1 13.3 18.1 12.7 17.7 12.3ZM4 6C4 3.8 5.8 2 8 2C10.2 2 12 3.8 12 6C12 8.2 10.2 10 8 10C5.8 10 4 8.2 4 6Z"
                />
              </svg>
            </span>
          </div>
          <button
            @click="openAddClientModal"
            class="inline-flex items-center justify-center rounded-md bg-primary py-2.5 px-6 text-dark hover:bg-opacity-90 transition-all duration-200"
          >
            <svg
              class="mr-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4V12M4 8H12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            Add New Client
          </button>
        </div>
      </div>

      <!-- Table -->
      <div class="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div class="max-w-full overflow-x-auto">
          <table class="w-full table-auto">
            <thead>
              <tr class="bg-gray-2 text-left dark:bg-meta-4">
                <th class="py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Name
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
              <tr 
                v-for="client in filteredClients" 
                :key="client.id" 
                class="hover:bg-gray-50 dark:hover:bg-meta-4 transition-colors duration-200 cursor-pointer"
              >
                <td class="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <div class="flex items-center gap-3">
                    <div class="h-12 w-12 rounded-lg overflow-hidden">
                      <img :src="client.avatar" :alt="client.name" class="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h5 class="font-medium text-black dark:text-white">
                        {{ client.name }}
                      </h5>
                      <p class="text-sm text-gray-500">{{ client.company }}</p>
                    </div>
                  </div>
                </td>
                <td class="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <span class="text-sm text-gray-500">{{ client.email }}</span>
                </td>
                <td class="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <span class="text-sm text-gray-500">{{ client.phone }}</span>
                </td>
                <td class="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <span
                    :class="[
                      'inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium',
                      client.status === 'Active'
                        ? 'bg-success text-success'
                        : 'bg-danger text-danger',
                    ]"
                  >
                    {{ client.status }}
                  </span>
                </td>
                <td class="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div class="flex items-center space-x-3.5">
                    <button
                      @click="showClientDetails(client)"
                      class="hover:text-primary transition-colors duration-200"
                    >
                      <svg
                        class="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99981 14.9449C3.12331 14.9449 0.586426 9.61838 0.586426 9.61838C0.586426 9.61838 3.12331 4.29188 8.99981 4.29188C14.8763 4.29188 17.4132 9.61838 17.4132 9.61838C17.4132 9.61838 14.8763 14.9449 8.99981 14.9449ZM8.99981 12.8249C10.8284 12.8249 12.3057 11.3476 12.3057 9.51888C12.3057 7.69025 10.8284 6.21288 8.99981 6.21288C7.17118 6.21288 5.69381 7.69025 5.69381 9.51888C5.69381 11.3476 7.17118 12.8249 8.99981 12.8249Z"
                          fill=""
                        />
                        <path
                          d="M9 11.3906C7.67836 11.3906 6.51562 10.2279 6.51562 8.90625C6.51562 7.58461 7.67836 6.42188 9 6.42188C10.3216 6.42188 11.4844 7.58461 11.4844 8.90625C11.4844 10.2279 10.3216 11.3906 9 11.3906Z"
                          fill=""
                        />
                      </svg>
                    </button>
                    <button
                      @click="editClient(client)"
                      class="hover:text-primary transition-colors duration-200"
                    >
                      <svg
                        class="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 13.5V17H5.5L14.87 7.63L11.37 4.13L2 13.5Z"
                          fill=""
                        />
                        <path
                          d="M17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L16.37 2.29C15.98 1.9 15.35 1.9 14.96 2.29L13.13 4.12L16.63 7.62L17.71 6.54C18.1 6.15 18.1 5.52 17.71 5.04Z"
                          fill=""
                        />
                      </svg>
                    </button>
                    <button
                      @click="deleteClient(client)"
                      class="hover:text-danger transition-colors duration-200"
                    >
                      <svg
                        class="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                          fill=""
                        />
                        <path
                          d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                          fill=""
                        />
                        <path
                          d="M11.2502 9.67504C10.9127 9.64692 10.6033 9.90004 10.5752 10.2375L10.4064 12.6094C10.3783 12.9469 10.6314 13.2563 10.9689 13.2563C11.3064 13.2563 11.5877 12.9751 11.5877 12.6375L11.7564 10.2657C11.7564 9.90004 11.5877 9.67504 11.2502 9.67504Z"
                          fill=""
                        />
                        <path
                          d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.30057 12.7219C6.3287 13.0594 6.63807 13.3125 6.97557 13.3125C7.31307 13.3125 7.59432 13.0313 7.59432 12.6938L7.42557 10.3219C7.42557 9.95629 7.31307 9.67504 6.72245 9.67504Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Pagination -->
      <div class="mt-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-500">Show</span>
          <select
            v-model="itemsPerPage"
            class="rounded border border-stroke bg-transparent py-1.5 px-3 text-sm outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <span class="text-sm text-gray-500">entries</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="currentPage--"
            :disabled="currentPage === 1"
            class="flex items-center justify-center rounded border border-stroke p-1.5 hover:border-primary hover:bg-primary hover:text-white disabled:border-gray-3 disabled:bg-gray-3 disabled:text-gray-5 dark:border-strokedark dark:hover:border-primary dark:disabled:border-gray-3 dark:disabled:bg-gray-3 transition-all duration-200"
          >
            <svg
              class="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1777 16.1156C12.009 16.1156 11.8402 16.0593 11.7277 15.9187L5.37148 9.44995C5.11836 9.19683 5.11836 8.80308 5.37148 8.54995L11.7277 2.0812C11.9809 1.82808 12.3746 1.82808 12.6277 2.0812C12.8809 2.33433 12.8809 2.72808 12.6277 2.9812L6.72148 9.44995L12.6277 15.9187C12.8809 16.1718 12.8809 16.5656 12.6277 16.8187C12.5152 16.9312 12.3464 16.9875 12.1777 16.9875V16.1156Z"
                fill=""
              />
            </svg>
          </button>
          <span class="text-sm text-gray-500">
            Page {{ currentPage }} of {{ totalPages }}
          </span>
          <button
            @click="currentPage++"
            :disabled="currentPage === totalPages"
            class="flex items-center justify-center rounded border border-stroke p-1.5 hover:border-primary hover:bg-primary hover:text-white disabled:border-gray-3 disabled:bg-gray-3 disabled:text-gray-5 dark:border-strokedark dark:hover:border-primary dark:disabled:border-gray-3 dark:disabled:bg-gray-3 transition-all duration-200"
          >
            <svg
              class="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.82148 16.1156C5.65273 16.1156 5.51211 16.0593 5.37148 15.9468L11.6996 9.44995C11.9527 9.19683 11.9527 8.80308 11.6996 8.54995L5.37148 2.05308C5.11836 1.79995 4.72461 1.79995 4.47148 2.05308C4.21836 2.3062 4.21836 2.69995 4.47148 2.95308L10.3777 9.44995L4.47148 15.9468C4.21836 16.1999 4.21836 16.5937 4.47148 16.8468C4.58398 16.9593 4.72461 17.0156 4.89336 17.0156L5.82148 16.1156Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Add/Edit Client Modal -->
    <div v-if="showClientModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="w-full max-w-2xl rounded-lg bg-white p-6 dark:bg-boxdark">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="text-xl font-bold text-black dark:text-white">
            {{ editingClient ? 'Edit Client' : 'Add New Client' }}
          </h3>
          <button @click="closeClientModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form @submit.prevent="saveClient" class="space-y-4">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="mb-2.5 block text-black dark:text-white">Full Name</label>
              <input
                v-model="clientForm.name"
                type="text"
                placeholder="Enter full name"
                class="w-full rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
                required
              />
            </div>
            <div>
              <label class="mb-2.5 block text-black dark:text-white">Email</label>
              <input
                v-model="clientForm.email"
                type="email"
                placeholder="Enter email address"
                class="w-full rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
                required
              />
            </div>
            <div>
              <label class="mb-2.5 block text-black dark:text-white">Phone</label>
              <input
                v-model="clientForm.phone"
                type="tel"
                placeholder="Enter phone number"
                class="w-full rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
                required
              />
            </div>
            <div>
              <label class="mb-2.5 block text-black dark:text-white">Company</label>
              <input
                v-model="clientForm.company"
                type="text"
                placeholder="Enter company name"
                class="w-full rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
                required
              />
            </div>
            <div>
              <label class="mb-2.5 block text-black dark:text-white">Status</label>
              <select
                v-model="clientForm.status"
                class="w-full rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div>
              <label class="mb-2.5 block text-black dark:text-white">Avatar URL</label>
              <input
                v-model="clientForm.avatar"
                type="url"
                placeholder="Enter avatar URL (optional)"
                class="w-full rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
              />
              <p class="mt-1 text-sm text-gray-500">Leave empty for random avatar</p>
            </div>
          </div>
          <div class="flex justify-end space-x-3">
            <button
              type="button"
              @click="closeClientModal"
              class="rounded border border-stroke py-2 px-6 hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:hover:border-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="rounded border border-stroke bg-primary hover:text-white py-2 px-6 text-dark hover:bg-opacity-90"
            >
              {{ editingClient ? 'Update' : 'Add' }} Client
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Client Detail Modal -->
    <div v-if="showClientDetail" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="w-full max-w-3xl rounded-lg bg-white p-6 dark:bg-boxdark">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="text-xl font-bold text-black dark:text-white">Client Details</h3>
          <button @click="closeClientDetail" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div v-if="selectedClient" class="space-y-6">
          <!-- Client Header -->
          <div class="flex items-center space-x-6">
            <div class="h-32 w-32 rounded-lg overflow-hidden">
              <img :src="selectedClient.avatar" :alt="selectedClient.name" class="h-full w-full object-cover" />
            </div>
            <div class="flex-1">
              <h4 class="text-2xl font-bold text-black dark:text-white">{{ selectedClient.name }}</h4>
              <p class="text-lg text-gray-500">{{ selectedClient.company }}</p>
              <span
                :class="[
                  'mt-2 inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium',
                  selectedClient.status === 'Active'
                    ? 'bg-success text-success'
                    : 'bg-danger text-danger',
                ]"
              >
                {{ selectedClient.status }}
              </span>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="rounded-lg border border-stroke p-4 dark:border-strokedark">
            <h5 class="mb-3 text-lg font-semibold text-black dark:text-white">Contact Information</h5>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p class="text-sm text-gray-500">Email Address</p>
                <p class="font-medium text-black dark:text-white">{{ selectedClient.email }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Phone Number</p>
                <p class="font-medium text-black dark:text-white">{{ selectedClient.phone }}</p>
              </div>
            </div>
          </div>

          <!-- Additional Information -->
          <div class="rounded-lg border border-stroke p-4 dark:border-strokedark">
            <h5 class="mb-3 text-lg font-semibold text-black dark:text-white">Additional Information</h5>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p class="text-sm text-gray-500">Client ID</p>
                <p class="font-medium text-black dark:text-white">#{{ selectedClient.id }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Company</p>
                <p class="font-medium text-black dark:text-white">{{ selectedClient.company }}</p>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <!-- <div class="flex justify-end space-x-3">
            <button
              @click="editClient(selectedClient)"
              class="rounded border border-stroke py-2 px-6 hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:hover:border-primary"
            >
              Edit Client
            </button>
            <button
              @click="deleteClient(selectedClient)"
              class="rounded bg-danger py-2 px-6 text-dark hover:bg-opacity-90"
            >
              Delete Client
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'

defineOptions({
  name: 'ClientsPage'
})

interface Client {
  id: number
  name: string
  email: string
  phone: string
  company: string
  status: string
  avatar: string
}

// Sample data
const clients = ref<Client[]>([
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    company: 'Tech Corp',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1 234 567 891',
    company: 'Design Co',
    status: 'Inactive',
    avatar: 'https://i.pravatar.cc/150?img=2'
  }
])

// Modal state
const showClientModal = ref(false)
const showClientDetail = ref(false)
const editingClient = ref<Client | null>(null)
const selectedClient = ref<Client | null>(null)

// Form state
const clientForm = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  status: 'Active',
  avatar: ''
})

// Search and pagination
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(10)

const filteredClients = computed(() => {
  return clients.value.filter(client => {
    const searchLower = searchQuery.value.toLowerCase()
    return (
      client.name.toLowerCase().includes(searchLower) ||
      client.email.toLowerCase().includes(searchLower) ||
      client.company.toLowerCase().includes(searchLower)
    )
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredClients.value.length / itemsPerPage.value)
})

// Actions
const openAddClientModal = () => {
  editingClient.value = null
  clientForm.value = {
    name: '',
    email: '',
    phone: '',
    company: '',
    status: 'Active',
    avatar: ''
  }
  showClientModal.value = true
}

const closeClientModal = () => {
  showClientModal.value = false
  editingClient.value = null
}

const validateClientForm = () => {
  if (!clientForm.value.name) {
    alert('Please enter a client name')
    return false
  }
  if (!clientForm.value.email) {
    alert('Please enter an email address')
    return false
  }
  if (!clientForm.value.phone) {
    alert('Please enter a phone number')
    return false
  }
  if (!clientForm.value.company) {
    alert('Please enter a company name')
    return false
  }
  if (!clientForm.value.status) {
    alert('Please select a status')
    return false
  }
  return true
}

const saveClient = () => {
  if (!validateClientForm()) {
    return
  }

  if (editingClient.value) {
    // Update existing client
    const index = clients.value.findIndex(c => c.id === editingClient.value?.id)
    if (index !== -1) {
      clients.value[index] = {
        ...clients.value[index],
        ...clientForm.value
      }
    }
  } else {
    // Add new client
    const newClient: Client = {
      id: Math.max(...clients.value.map(c => c.id)) + 1,
      name: clientForm.value.name,
      email: clientForm.value.email,
      phone: clientForm.value.phone,
      company: clientForm.value.company,
      status: clientForm.value.status,
      avatar: clientForm.value.avatar || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
    }
    clients.value.push(newClient)
  }
  closeClientModal()
}

const editClient = (client: Client) => {
  editingClient.value = client
  clientForm.value = { ...client }
  showClientModal.value = true
}

const deleteClient = (client: Client) => {
  if (confirm('Are you sure you want to delete this client?')) {
    clients.value = clients.value.filter(c => c.id !== client.id)
    if (showClientDetail.value) {
      closeClientDetail()
    }
  }
}

const showClientDetails = (client: Client) => {
  selectedClient.value = client
  showClientDetail.value = true
}

const closeClientDetail = () => {
  showClientDetail.value = false
  selectedClient.value = null
}
</script> 