<template>
  <AdminLayout>
  <div class="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
    <div class="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
      <div class="flex w-full flex-wrap gap-3 sm:gap-5">
        <div class="flex min-w-47.5">
          <h4 class="text-xl font-semibold text-black dark:text-white">
            Profile
          </h4>
        </div>
      </div>
    </div>

    <!-- Profile Header -->
    <div class="mt-4 flex flex-col items-center">
      <div class="relative">
        <div class="h-32 w-32 overflow-hidden rounded-full">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
            alt="Profile"
            class="h-full w-full object-cover"
          />
        </div>
        <button class="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 8L12 3L7 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 3V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <h5 class="mt-4 text-xl font-medium text-black dark:text-white">
        John Doe
      </h5>
      <p class="text-sm text-gray-500">
        john.doe@example.com
      </p>
    </div>

    <!-- Profile Information -->
    <div class="mt-8">
      <h5 class="mb-4 text-lg font-semibold text-black dark:text-white">
        Personal Information
      </h5>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="space-y-4">
          <div>
            <label class="mb-2.5 block text-black dark:text-white">
              First Name
            </label>
            <input
              type="text"
              value="John"
              class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
            />
          </div>
          <div>
            <label class="mb-2.5 block text-black dark:text-white">
              Last Name
            </label>
            <input
              type="text"
              value="Doe"
              class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
            />
          </div>
          <div>
            <label class="mb-2.5 block text-black dark:text-white">
              Email
            </label>
            <input
              type="email"
              value="john.doe@example.com"
              class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
            />
          </div>
        </div>
        <div class="space-y-4">
          <div>
            <label class="mb-2.5 block text-black dark:text-white">
              Phone Number
            </label>
            <input
              type="tel"
              value="+1 (555) 123-4567"
              class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
            />
          </div>
          <div>
            <label class="mb-2.5 block text-black dark:text-white">
              Company
            </label>
            <input
              type="text"
              value="Acme Inc."
              class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
            />
          </div>
          <div>
            <label class="mb-2.5 block text-black dark:text-white">
              Position
            </label>
            <input
              type="text"
              value="Senior Developer"
              class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Social Links -->
    <div class="mt-8">
      <h5 class="mb-4 text-lg font-semibold text-black dark:text-white">
        Social Links
      </h5>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label class="mb-2.5 block text-black dark:text-white">
            LinkedIn
          </label>
          <input
            type="url"
            value="https://linkedin.com/in/johndoe"
            class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
          />
        </div>
        <div>
          <label class="mb-2.5 block text-black dark:text-white">
            Twitter
          </label>
          <input
            type="url"
            value="https://twitter.com/johndoe"
            class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
          />
        </div>
        <div>
          <label class="mb-2.5 block text-black dark:text-white">
            GitHub
          </label>
          <input
            type="url"
            value="https://github.com/johndoe"
            class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
          />
        </div>
        <div>
          <label class="mb-2.5 block text-black dark:text-white">
            Website
          </label>
          <input
            type="url"
            value="https://johndoe.com"
            class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
          />
        </div>
      </div>
    </div>

    <!-- Bio -->
    <div class="mt-8">
      <h5 class="mb-4 text-lg font-semibold text-black dark:text-white">
        Bio
      </h5>
      <div>
        <label class="mb-2.5 block text-black dark:text-white">
          About Me
        </label>
        <textarea
          rows="4"
          class="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
        >Senior developer with 8+ years of experience in web development. Passionate about creating user-friendly applications and solving complex problems.</textarea>
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