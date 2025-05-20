<template>
  <AdminLayout>
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Email Automation</h1>
        <button
          @click="showNewWorkflowModal = true"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          New Workflow
        </button>
      </div>

      <!-- Existing Workflows -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden mb-6">
        <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">Active Workflows</h2>
        </div>
        <div class="divide-y divide-gray-200 dark:divide-gray-700">
          <div v-for="workflow in workflows" :key="workflow.id" class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">{{ workflow.name }}</h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Trigger: {{ formatTrigger(workflow.trigger) }}
                </p>
              </div>
              <div class="flex items-center space-x-4">
                <span
                  :class="[
                    'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                    workflow.active
                      ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
                  ]"
                >
                  {{ workflow.active ? 'Active' : 'Inactive' }}
                </span>
                <button
                  @click="editWorkflow(workflow)"
                  class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Edit
                </button>
                <button
                  @click="toggleWorkflow(workflow)"
                  class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  {{ workflow.active ? 'Disable' : 'Enable' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- New/Edit Workflow Modal -->
      <div v-if="showNewWorkflowModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">
              {{ editingWorkflow ? 'Edit Workflow' : 'New Workflow' }}
            </h2>
            <button
              @click="showNewWorkflowModal = false"
              class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form @submit.prevent="saveWorkflow" class="space-y-6">
            <!-- Workflow Name -->
            <div>
              <label for="workflow-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Workflow Name</label>
              <input
                type="text"
                id="workflow-name"
                v-model="currentWorkflow.name"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <!-- Trigger Selection -->
            <div>
              <label for="trigger" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Trigger</label>
              <select
                id="trigger"
                v-model="currentWorkflow.trigger"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select a trigger</option>
                <option value="customer_added">On Customer Added</option>
                <option value="deal_status_changed">On Deal Status Changed</option>
                <option value="upcoming_task">On Upcoming Task (24h before)</option>
                <option value="birthday">On Birthday</option>
              </select>
            </div>

            <!-- Condition Builder (shown only for deal_status_changed) -->
            <div v-if="currentWorkflow.trigger === 'deal_status_changed'">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Conditions</label>
              <div class="mt-2 space-y-4">
                <div class="flex items-center space-x-4">
                  <select
                    v-model="currentWorkflow.condition!.field"
                    class="block w-1/3 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="deal_value">Deal Value</option>
                    <option value="deal_type">Deal Type</option>
                  </select>
                  <select
                    v-model="currentWorkflow.condition!.operator"
                    class="block w-1/3 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="greater_than">Greater Than</option>
                    <option value="less_than">Less Than</option>
                    <option value="equals">Equals</option>
                  </select>
                  <input
                    type="text"
                    v-model="currentWorkflow.condition!.value"
                    class="block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Value"
                  />
                </div>
              </div>
            </div>

            <!-- Email Configuration -->
            <div>
              <label for="email-subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Subject</label>
              <input
                type="text"
                id="email-subject"
                v-model="currentWorkflow.email.subject"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div>
              <label for="email-body" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Body</label>
              <div class="mt-1">
                <div class="mb-2 flex space-x-2">
                  <button
                    type="button"
                    @click="insertVariable('customer.name')"
                    class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
                  >
                    customer.name
                  </button>
                  <button
                    type="button"
                    @click="insertVariable('deal.amount')"
                    class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
                  >
                    deal.amount
                  </button>
                  <button
                    type="button"
                    @click="insertVariable('task.due_date')"
                    class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
                  >
                    task.due_date
                  </button>
                </div>
                <textarea
                  id="email-body"
                  v-model="currentWorkflow.email.body"
                  rows="8"
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                ></textarea>
              </div>
            </div>

            <div class="flex justify-end space-x-4">
              <button
                type="button"
                @click="showNewWorkflowModal = false"
                class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {{ editingWorkflow ? 'Update Workflow' : 'Create Workflow' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '@/components/layout/AdminLayout.vue'
import { ref } from 'vue'

defineOptions({
  name: 'EmailAutomation'
})

interface Condition {
  field: string
  operator: string
  value: string
}

interface Email {
  subject: string
  body: string
}

interface Workflow {
  id: number
  name: string
  trigger: string
  condition?: Condition
  email: Email
  active: boolean
}

// Mock data - replace with actual API calls
const workflows = ref<Workflow[]>([
  {
    id: 1,
    name: 'Welcome Email',
    trigger: 'customer_added',
    email: {
      subject: 'Welcome to Our Service!',
      body: 'Dear {{ customer.name }},\n\nWelcome to our platform! We\'re excited to have you on board.'
    },
    active: true
  },
  {
    id: 2,
    name: 'Deal Reminder',
    trigger: 'deal_status_changed',
    condition: {
      field: 'deal_value',
      operator: 'greater_than',
      value: '10000'
    },
    email: {
      subject: 'Important Deal Update',
      body: 'The deal {{ deal.name }} has been updated. Current value: {{ deal.amount }}'
    },
    active: true
  }
])

const showNewWorkflowModal = ref(false)
const editingWorkflow = ref<Workflow | null>(null)

const currentWorkflow = ref<Workflow>({
  id: 0,
  name: '',
  trigger: '',
  email: {
    subject: '',
    body: ''
  },
  active: true
})

const formatTrigger = (trigger: string) => {
  return trigger.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

const insertVariable = (variable: string) => {
  const textarea = document.getElementById('email-body') as HTMLTextAreaElement
  const start = textarea.selectionStart
  const end = textarea.selectionEnd
  const text = currentWorkflow.value.email.body
  const before = text.substring(0, start)
  const after = text.substring(end)
  currentWorkflow.value.email.body = before + `{{ ${variable} }}` + after
}

const editWorkflow = (workflow: Workflow) => {
  editingWorkflow.value = workflow
  currentWorkflow.value = { ...workflow }
  showNewWorkflowModal.value = true
}

const toggleWorkflow = async (workflow: Workflow) => {
  try {
    // TODO: Implement API call to toggle workflow status
    workflow.active = !workflow.active
  } catch (error) {
    console.error('Error toggling workflow:', error)
    alert('Error updating workflow status. Please try again.')
  }
}

const saveWorkflow = async () => {
  try {
    if (editingWorkflow.value) {
      // Update existing workflow
      const index = workflows.value.findIndex(w => w.id === editingWorkflow.value?.id)
      if (index !== -1) {
        workflows.value[index] = { ...currentWorkflow.value }
      }
    } else {
      // Create new workflow
      const newWorkflow = {
        ...currentWorkflow.value,
        id: Date.now()
      }
      workflows.value.push(newWorkflow)
    }
    
    showNewWorkflowModal.value = false
    editingWorkflow.value = null
    currentWorkflow.value = {
      id: 0,
      name: '',
      trigger: '',
      email: {
        subject: '',
        body: ''
      },
      active: true
    }
  } catch (error) {
    console.error('Error saving workflow:', error)
    alert('Error saving workflow. Please try again.')
  }
}
</script> 