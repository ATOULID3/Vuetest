<template>
  <div class="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
    <div class="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
      <div class="flex w-full flex-wrap gap-3 sm:gap-5">
        <div class="flex min-w-47.5">
          <h4 class="text-xl font-semibold text-black dark:text-white">
            Calendar
          </h4>
        </div>
        <div class="flex min-w-47.5">
          <button class="inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-white hover:bg-opacity-90">
            Add Event
          </button>
        </div>
      </div>
    </div>

    <!-- Calendar Header -->
    <div class="mt-4 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <button class="rounded-md border border-stroke p-2 hover:border-primary dark:border-strokedark">
          <svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 3.75L6.75 9L11.25 14.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="rounded-md border border-stroke p-2 hover:border-primary dark:border-strokedark">
          <svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.75 3.75L11.25 9L6.75 14.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <h5 class="text-lg font-medium">March 2024</h5>
      </div>
      <div class="flex items-center gap-2">
        <button class="rounded-md border border-stroke px-4 py-2 hover:border-primary dark:border-strokedark">
          Today
        </button>
        <select class="rounded-md border border-stroke bg-transparent py-2 px-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-form-strokedark dark:bg-form-input">
          <option value="month">Month</option>
          <option value="week">Week</option>
          <option value="day">Day</option>
        </select>
      </div>
    </div>

    <!-- Calendar Grid -->
    <div class="mt-4">
      <!-- Week Days -->
      <div class="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700">
        <div v-for="day in weekDays" :key="day" class="bg-white p-2 text-center text-sm font-medium dark:bg-boxdark">
          {{ day }}
        </div>
      </div>

      <!-- Calendar Days -->
      <div class="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700">
        <div
          v-for="day in calendarDays"
          :key="day.date"
          class="min-h-[120px] bg-white p-2 dark:bg-boxdark"
          :class="{
            'text-gray-400': !day.isCurrentMonth,
            'bg-gray-50 dark:bg-meta-4': day.isToday
          }"
        >
          <div class="flex items-center justify-between">
            <span class="text-sm">{{ day.day }}</span>
            <button
              v-if="day.isCurrentMonth"
              class="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-meta-4"
            >
              <svg class="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 4.5C8.27614 4.5 8.5 4.27614 8.5 4C8.5 3.72386 8.27614 3.5 8 3.5C7.72386 3.5 7.5 3.72386 7.5 4C7.5 4.27614 7.72386 4.5 8 4.5Z" fill="currentColor"/>
                <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8C8.5 7.72386 8.27614 7.5 8 7.5C7.72386 7.5 7.5 7.72386 7.5 8C7.5 8.27614 7.72386 8.5 8 8.5Z" fill="currentColor"/>
                <path d="M8 12.5C8.27614 12.5 8.5 12.2761 8.5 12C8.5 11.7239 8.27614 11.5 8 11.5C7.72386 11.5 7.5 11.7239 7.5 12C7.5 12.2761 7.72386 12.5 8 12.5Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
          <div class="mt-2 space-y-1">
            <div
              v-for="event in day.events"
              :key="event.id"
              class="rounded-sm bg-primary bg-opacity-10 p-1 text-xs"
              :class="{
                'bg-success bg-opacity-10': event.type === 'meeting',
                'bg-warning bg-opacity-10': event.type === 'task'
              }"
            >
              {{ event.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const calendarDays = ref([
  {
    date: '2024-03-01',
    day: 1,
    isCurrentMonth: false,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-02',
    day: 2,
    isCurrentMonth: false,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-03',
    day: 3,
    isCurrentMonth: false,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-04',
    day: 4,
    isCurrentMonth: true,
    isToday: false,
    events: [
      {
        id: 1,
        title: 'Team Meeting',
        type: 'meeting'
      }
    ]
  },
  {
    date: '2024-03-05',
    day: 5,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-06',
    day: 6,
    isCurrentMonth: true,
    isToday: false,
    events: [
      {
        id: 2,
        title: 'Project Review',
        type: 'meeting'
      }
    ]
  },
  {
    date: '2024-03-07',
    day: 7,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-08',
    day: 8,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-09',
    day: 9,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-10',
    day: 10,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-11',
    day: 11,
    isCurrentMonth: true,
    isToday: false,
    events: [
      {
        id: 3,
        title: 'Client Call',
        type: 'meeting'
      }
    ]
  },
  {
    date: '2024-03-12',
    day: 12,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-13',
    day: 13,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-14',
    day: 14,
    isCurrentMonth: true,
    isToday: false,
    events: [
      {
        id: 4,
        title: 'Code Review',
        type: 'task'
      }
    ]
  },
  {
    date: '2024-03-15',
    day: 15,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-16',
    day: 16,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-17',
    day: 17,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-18',
    day: 18,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-19',
    day: 19,
    isCurrentMonth: true,
    isToday: true,
    events: [
      {
        id: 5,
        title: 'Sprint Planning',
        type: 'meeting'
      }
    ]
  },
  {
    date: '2024-03-20',
    day: 20,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-21',
    day: 21,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-22',
    day: 22,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-23',
    day: 23,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-24',
    day: 24,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-25',
    day: 25,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-26',
    day: 26,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-27',
    day: 27,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-28',
    day: 28,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-29',
    day: 29,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-30',
    day: 30,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-03-31',
    day: 31,
    isCurrentMonth: true,
    isToday: false,
    events: []
  },
  {
    date: '2024-04-01',
    day: 1,
    isCurrentMonth: false,
    isToday: false,
    events: []
  }
])
</script> 