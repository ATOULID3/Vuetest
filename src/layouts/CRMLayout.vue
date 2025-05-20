<template>
  <div class="flex h-screen bg-gray-100 dark:bg-boxdark">
    <!-- Sidebar -->
    <aside class="w-64 bg-white dark:bg-boxdark-2 border-r border-stroke dark:border-strokedark">
      <div class="p-4">
        <h1 class="text-2xl font-bold text-black dark:text-white">CRM System</h1>
      </div>
      <nav class="mt-4">
        <div class="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">Main</div>
        <router-link
          to="/dashboard"
          class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-meta-4"
          active-class="bg-primary bg-opacity-10 text-primary"
        >
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Dashboard
        </router-link>

        <div class="px-4 py-2 mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">Customers</div>
        <router-link
          to="/customers"
          class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-meta-4"
          active-class="bg-primary bg-opacity-10 text-primary"
        >
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Customers
        </router-link>

        <div class="px-4 py-2 mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">Deals</div>
        <router-link
          to="/deals"
          class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-meta-4"
          active-class="bg-primary bg-opacity-10 text-primary"
        >
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Pipeline
        </router-link>

        <div class="px-4 py-2 mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">Tasks</div>
        <router-link
          to="/tasks"
          class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-meta-4"
          active-class="bg-primary bg-opacity-10 text-primary"
        >
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          Tasks
        </router-link>
        <router-link
          to="/calendar"
          class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-meta-4"
          active-class="bg-primary bg-opacity-10 text-primary"
        >
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Calendar
        </router-link>

        <div class="px-4 py-2 mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">Reports</div>
        <router-link
          to="/reports"
          class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-meta-4"
          active-class="bg-primary bg-opacity-10 text-primary"
        >
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Reports
        </router-link>

        <div class="px-4 py-2 mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">Settings</div>
        <router-link
          to="/settings"
          class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-meta-4"
          active-class="bg-primary bg-opacity-10 text-primary"
        >
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Settings
        </router-link>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="bg-white dark:bg-boxdark border-b border-stroke dark:border-strokedark">
        <div class="flex items-center justify-between px-6 py-4">
          <div class="flex items-center">
            <button class="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div class="relative mx-4">
              <input
                type="text"
                placeholder="Search..."
                class="w-64 rounded-lg border border-stroke bg-transparent py-2 pl-10 pr-4 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
              />
              <span class="absolute left-3 top-1/2 -translate-y-1/2">
                <svg class="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.7 14.3L12.3 10.9C13.4 9.5 14 7.8 14 6C14 2.7 11.3 0 8 0C4.7 0 2 2.7 2 6C2 9.3 4.7 12 8 12C9.8 12 11.5 11.4 12.9 10.3L16.3 13.7C16.5 13.9 16.8 14 17 14C17.2 14 17.5 13.9 17.7 13.7C18.1 13.3 18.1 12.7 17.7 12.3ZM4 6C4 3.8 5.8 2 8 2C10.2 2 12 3.8 12 6C12 8.2 10.2 10 8 10C5.8 10 4 8.2 4 6Z" />
                </svg>
              </span>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button class="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div class="relative">
              <button class="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe"
                  alt="User"
                  class="w-8 h-8 rounded-full"
                />
                <span>John Doe</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-boxdark">
        <div class="container mx-auto px-6 py-8">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'CRMLayout'
})
</script> 