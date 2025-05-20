<template>
  <AdminLayout>
  <div class="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
    <div class="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
      <div class="flex w-full flex-wrap gap-3 sm:gap-5">
        <div class="flex min-w-47.5">
          <h4 class="text-xl font-semibold text-black dark:text-white">
            Help Center
          </h4>
        </div>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="mt-4">
      <div class="relative">
        <input
          type="text"
          placeholder="Search for help..."
          class="w-full rounded-lg border border-stroke bg-transparent py-4 pl-11.5 pr-4.5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input"
        />
        <span class="absolute left-4 top-1/2 -translate-y-1/2">
          <svg class="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7 14.3L12.3 10.9C13.4 9.5 14 7.8 14 6C14 2.7 11.3 0 8 0C4.7 0 2 2.7 2 6C2 9.3 4.7 12 8 12C9.8 12 11.5 11.4 12.9 10.3L16.3 13.7C16.5 13.9 16.8 14 17 14C17.2 14 17.5 13.9 17.7 13.7C18.1 13.3 18.1 12.7 17.7 12.3L15.7 14.3ZM8 10C5.8 10 4 8.2 4 6C4 3.8 5.8 2 8 2C10.2 2 12 3.8 12 6C12 8.2 10.2 10 8 10Z" fill=""/>
          </svg>
        </span>
      </div>
    </div>

    <!-- Quick Links -->
    <div class="mt-6">
      <h5 class="mb-4 text-lg font-semibold text-black dark:text-white">
        Quick Links
      </h5>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <a
          v-for="link in quickLinks"
          :key="link.title"
          :href="link.href"
          class="flex items-center gap-3 rounded-lg border border-stroke p-4 hover:border-primary dark:border-strokedark"
        >
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-10">
            <HelpIcons :name="link.icon" />
          </div>
          <div>
            <h6 class="font-medium text-black dark:text-white">
              {{ link.title }}
            </h6>
            <p class="text-sm text-gray-500">
              {{ link.description }}
            </p>
          </div>
        </a>
      </div>
    </div>

    <!-- FAQs -->
    <div class="mt-8">
      <h5 class="mb-4 text-lg font-semibold text-black dark:text-white">
        Frequently Asked Questions
      </h5>
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="rounded-lg border border-stroke p-4 dark:border-strokedark"
        >
          <button
            class="flex w-full items-center justify-between"
            @click="toggleFaq(index)"
          >
            <h6 class="text-left font-medium text-black dark:text-white">
              {{ faq.question }}
            </h6>
            <svg
              class="h-5 w-5 transform transition-transform"
              :class="{ 'rotate-180': faq.isOpen }"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            v-show="faq.isOpen"
            class="mt-4 text-sm text-gray-500"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Support -->
    <div class="mt-8">
      <h5 class="mb-4 text-lg font-semibold text-black dark:text-white">
        Need More Help?
      </h5>
      <div class="rounded-lg border border-stroke bg-gray-2 p-6 dark:border-strokedark dark:bg-meta-4">
        <div class="flex flex-col items-center text-center">
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary bg-opacity-10">
            <svg class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
            </svg>
          </div>
          <h6 class="mb-2 text-lg font-medium text-black dark:text-white">
            Contact Support
          </h6>
          <p class="mb-4 text-sm text-gray-500">
            Our support team is here to help you with any questions or issues you may have.
          </p>
          <button class="inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-white hover:bg-opacity-90">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </div>
</AdminLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'
import HelpIcons from '@/components/icons/HelpIcons.vue'

const quickLinks = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of using our platform',
    href: '#',
    icon: 'DocumentIcon'
  },
  {
    title: 'User Guide',
    description: 'Detailed documentation for all features',
    href: '#',
    icon: 'BookIcon'
  },
  {
    title: 'Video Tutorials',
    description: 'Watch step-by-step video guides',
    href: '#',
    icon: 'VideoIcon'
  },
  {
    title: 'API Documentation',
    description: 'Technical documentation for developers',
    href: '#',
    icon: 'CodeIcon'
  }
]

const faqs = ref([
  {
    question: 'How do I reset my password?',
    answer: 'To reset your password, click on the "Forgot Password" link on the login page. You will receive an email with instructions to reset your password.',
    isOpen: false
  },
  {
    question: 'How can I update my profile information?',
    answer: 'You can update your profile information by going to the Settings page and clicking on the Profile tab. From there, you can edit your personal information and save the changes.',
    isOpen: false
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. For enterprise customers, we also offer invoice-based payments.',
    isOpen: false
  },
  {
    question: 'How do I cancel my subscription?',
    answer: 'To cancel your subscription, go to the Settings page and click on the Billing tab. From there, you can manage your subscription and cancel it at any time.',
    isOpen: false
  },
  {
    question: 'Is there a mobile app available?',
    answer: 'Yes, we have mobile apps available for both iOS and Android devices. You can download them from the App Store or Google Play Store.',
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script> 