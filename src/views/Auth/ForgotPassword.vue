<template>
  <FullScreenLayout>
    <div class="relative min-h-screen bg-cover bg-center bg-no-repeat" style="background-image: url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop');">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative p-6 z-1 sm:p-0">
        <div class="relative flex flex-col justify-center w-full h-screen lg:flex-row">
          <div class="flex flex-col flex-1 w-full lg:w-1/2">
            <div class="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
              <div class="p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
                <div class="mb-5 sm:mb-8">
                  <h1 class="mb-2 font-semibold text-gray-800 text-title-sm sm:text-title-md">
                    Forgot Password
                  </h1>
                  <p class="text-sm text-gray-600">
                    Enter your email address and we'll send you a link to reset your password.
                  </p>
                </div>
                <div>
                  <form @submit.prevent="handleSubmit">
                    <div class="space-y-5">
                      <!-- Email -->
                      <div>
                        <label
                          for="email"
                          class="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Email<span class="text-error-500">*</span>
                        </label>
                        <input
                          v-model="email"
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          class="h-11 w-full rounded-lg border border-gray-300 bg-white/80 px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10"
                        />
                      </div>
                      <!-- Button -->
                      <div>
                        <button
                          type="submit"
                          class="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
                        >
                          Send Reset Link
                        </button>
                      </div>
                    </div>
                  </form>
                  <div class="mt-5">
                    <p class="text-sm font-normal text-center text-gray-700 sm:text-start">
                      Remember your password?
                      <router-link
                        to="/signin"
                        class="text-brand-500 hover:text-brand-600"
                        >Sign In</router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </FullScreenLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FullScreenLayout from '@/components/layout/FullScreenLayout.vue'

const email = ref('')

const handleSubmit = () => {
  // Implement password reset logic here
  console.log('Reset password requested for:', email.value)
}
</script> 