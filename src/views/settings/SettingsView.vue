<template>
  <AdminLayout>
  <div class="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
    <div class="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
      <div class="flex w-full flex-wrap gap-3 sm:gap-5">
        <div class="flex min-w-47.5">
          <h4 class="text-xl font-semibold text-black dark:text-white">
            Settings
          </h4>
        </div>
      </div>
    </div>

    <!-- Account Settings -->
    <div class="mt-4">
      <h5 class="mb-4 text-lg font-semibold text-black dark:text-white">
        Account Settings
      </h5>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <h6 class="font-medium text-black dark:text-white">
              Email Notifications
            </h6>
            <p class="text-sm text-gray-500">
              Receive email notifications about your account activity
            </p>
          </div>
          <label class="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" class="peer sr-only" checked />
            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-primary/80"></div>
          </label>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <h6 class="font-medium text-black dark:text-white">
              Marketing Emails
            </h6>
            <p class="text-sm text-gray-500">
              Receive emails about new features and promotions
            </p>
          </div>
          <label class="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" class="peer sr-only" />
            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-primary/80"></div>
          </label>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <h6 class="font-medium text-black dark:text-white">
              Two-Factor Authentication
            </h6>
            <p class="text-sm text-gray-500">
              Add an extra layer of security to your account
            </p>
          </div>
          <button class="inline-flex items-center justify-center rounded-md border border-primary py-2 px-6 text-primary hover:bg-primary hover:text-white">
            Enable
          </button>
        </div>
      </div>
    </div>

    <!-- Appearance -->
    <div class="mt-8">
      <h5 class="mb-4 text-lg font-semibold text-black dark:text-white">
        Appearance
      </h5>
      <div class="space-y-4">
        <div>
          <label class="mb-2.5 block text-black dark:text-white">
            Theme
          </label>
          <div class="flex gap-4">
            <button class="flex items-center gap-2 rounded-md border border-primary bg-primary px-4 py-2 text-white">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 1V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 21V23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 12H23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Light
            </button>
            <button class="flex items-center gap-2 rounded-md border border-stroke px-4 py-2 text-gray-500 hover:border-primary hover:text-primary dark:border-strokedark">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Dark
            </button>
            <button class="flex items-center gap-2 rounded-md border border-stroke px-4 py-2 text-gray-500 hover:border-primary hover:text-primary dark:border-strokedark">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 2V12L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              System
            </button>
          </div>
        </div>
        <div>
          <label class="mb-2.5 block text-black dark:text-white">
            Font Size
          </label>
          <div class="flex items-center gap-4">
            <button class="rounded-md border border-stroke px-3 py-1 text-sm hover:border-primary hover:text-primary dark:border-strokedark">
              Small
            </button>
            <button class="rounded-md border border-primary bg-primary px-3 py-1 text-sm text-white">
              Medium
            </button>
            <button class="rounded-md border border-stroke px-3 py-1 text-sm hover:border-primary hover:text-primary dark:border-strokedark">
              Large
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Language & Region -->
    <div class="mt-8">
      <h5 class="mb-4 text-lg font-semibold text-black dark:text-white">
        Language & Region
      </h5>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label class="mb-2.5 block text-black dark:text-white">
            Language
          </label>
          <select class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
        <div>
          <label class="mb-2.5 block text-black dark:text-white">
            Time Zone
          </label>
          <select class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input">
            <option value="utc">UTC</option>
            <option value="est">Eastern Time</option>
            <option value="cst">Central Time</option>
            <option value="pst">Pacific Time</option>
          </select>
        </div>
        <div>
          <label class="mb-2.5 block text-black dark:text-white">
            Date Format
          </label>
          <select class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input">
            <option value="mm/dd/yyyy">MM/DD/YYYY</option>
            <option value="dd/mm/yyyy">DD/MM/YYYY</option>
            <option value="yyyy-mm-dd">YYYY-MM-DD</option>
          </select>
        </div>
        <div>
          <label class="mb-2.5 block text-black dark:text-white">
            Time Format
          </label>
          <select class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input">
            <option value="12h">12-hour</option>
            <option value="24h">24-hour</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Privacy -->
    <div class="mt-8">
      <h5 class="mb-4 text-lg font-semibold text-black dark:text-white">
        Privacy
      </h5>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <h6 class="font-medium text-black dark:text-white">
              Activity Status
            </h6>
            <p class="text-sm text-gray-500">
              Show when you're active on the platform
            </p>
          </div>
          <label class="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" class="peer sr-only" checked />
            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-primary/80"></div>
          </label>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <h6 class="font-medium text-black dark:text-white">
              Profile Visibility
            </h6>
            <p class="text-sm text-gray-500">
              Make your profile visible to other users
            </p>
          </div>
          <label class="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" class="peer sr-only" checked />
            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-primary/80"></div>
          </label>
        </div>
      </div>
    </div>

    <!-- Save Button -->
    <div class="mt-8 flex justify-end">
      <button class="inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-white hover:bg-opacity-90">
        Save Changes
      </button>
    </div>
  </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '@/components/layout/AdminLayout.vue'
// Add your component logic here
</script> 