import { createRouter, createWebHistory } from 'vue-router'
import Signin from '@/views/Auth/Signin.vue'
import Signup from '@/views/Auth/Signup.vue'
import ForgotPassword from '@/views/Auth/ForgotPassword.vue'
import Clients from '@/views/Clients.vue'
import Products from '@/views/Products.vue'
import HelpView from '@/views/help/HelpView.vue'
import BillingView from '@/views/billing/BillingView.vue'
import SettingsView from '@/views/settings/SettingsView.vue'
import CustomerList from '@/views/customers/CustomerList.vue'
import DealPipeline from '@/views/deals/DealPipeline.vue'
import ReportsView from '@/views/reports/ReportsView.vue'
import TaskList from '@/views/tasks/TaskList.vue'
import InvoicesListView from '@/views/invoices/InvoicesListView.vue'
import CreateInvoiceView from '@/views/invoices/CreateInvoiceView.vue'
import PaymentsView from '@/views/payments/PaymentsView.vue'
import GenerateDocuments from '@/views/customers/GenerateDocuments.vue'
import CustomerDocuments from '@/views/customers/CustomerDocuments.vue'
import Automation from '@/views/automation/Automation.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Ecommerce',
      component: () => import('../views/Ecommerce.vue'),
      meta: {
        title: 'eCommerce Dashboard',
      },
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: () => import('../views/Others/Calendar.vue'),
      meta: {
        title: 'Calendar',
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Others/UserProfile.vue'),
      meta: {
        title: 'Profile',
      },
    },
    {
      path: '/form-elements',
      name: 'Form Elements',
      component: () => import('../views/Forms/FormElements.vue'),
      meta: {
        title: 'Form Elements',
      },
    },
    {
      path: '/basic-tables',
      name: 'Basic Tables',
      component: () => import('../views/Tables/BasicTables.vue'),
      meta: {
        title: 'Basic Tables',
      },
    },
    {
      path: '/line-chart',
      name: 'Line Chart',
      component: () => import('../views/Chart/LineChart/LineChart.vue'),
    },
    {
      path: '/bar-chart',
      name: 'Bar Chart',
      component: () => import('../views/Chart/BarChart/BarChart.vue'),
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: () => import('../views/UiElements/Alerts.vue'),
      meta: {
        title: 'Alerts',
      },
    },
    {
      path: '/avatars',
      name: 'Avatars',
      component: () => import('../views/UiElements/Avatars.vue'),
      meta: {
        title: 'Avatars',
      },
    },
    {
      path: '/badge',
      name: 'Badge',
      component: () => import('../views/UiElements/Badges.vue'),
      meta: {
        title: 'Badge',
      },
    },

    {
      path: '/buttons',
      name: 'Buttons',
      component: () => import('../views/UiElements/Buttons.vue'),
      meta: {
        title: 'Buttons',
      },
    },

    {
      path: '/images',
      name: 'Images',
      component: () => import('../views/UiElements/Images.vue'),
      meta: {
        title: 'Images',
      },
    },
    {
      path: '/videos',
      name: 'Videos',
      component: () => import('../views/UiElements/Videos.vue'),
      meta: {
        title: 'Videos',
      },
    },
    {
      path: '/blank',
      name: 'Blank',
      component: () => import('../views/Pages/BlankPage.vue'),
      meta: {
        title: 'Blank',
      },
    },

    {
      path: '/error-404',
      name: '404 Error',
      component: () => import('../views/Errors/FourZeroFour.vue'),
      meta: {
        title: '404 Error',
      },
    },

    {
      path: '/signin',
      name: 'Signin',
      component: Signin,
      meta: {
        title: 'Signin',
      },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta: {
        title: 'Signup',
      },
    },

    {
      path: '/forgot-password',
      name: 'Forgot Password',
      component: ForgotPassword,
      meta: {
        title: 'Forgot Password',
      },
    },
    {
      path: '/clients',
      name: 'clients',
      component: Clients,
      meta: { requiresAuth: true }
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
      meta: { requiresAuth: true }
    },
    {
      path: '/Customers',
      name: 'Customers',
      component: CustomerList,
      meta: { 
        title: 'Customers',
        requiresAuth: true 
      }
    },
    {
      path: '/DealPipelines',
      name: 'DealPipelines',
      component: DealPipeline,
      meta: { 
        title: 'DealPipelines',
        requiresAuth: true 
      }
    },
    {
      path: '/Reports',
      name: 'Reports',
      component: ReportsView,
      meta: { 
        title: 'Reports',
        requiresAuth: true 
      }
    },
    {
      path: '/help',
      name: 'help',
      component: HelpView,
      meta: { 
        title: 'Help',
        requiresAuth: true 
      }
    },
    {
      path: '/Tasks',
      name: 'Tasks',
      component: TaskList,
      meta: { 
        title: 'Tasks',
        requiresAuth: true 
      }
    },
    {
      path: '/billing',
      name: 'billing',
      component: BillingView,
      meta: { 
        title: 'Billing',
        requiresAuth: true 
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: { 
        title: 'Settings',
        requiresAuth: true 
      }
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: InvoicesListView,
      meta: { 
        title: 'Invoices',
        requiresAuth: true 
      }
    },
    {
      path: '/invoices/create',
      name: 'create-invoice',
      component: CreateInvoiceView,
      meta: { 
        title: 'Create Invoice',
        requiresAuth: true 
      }
    },
    {
      path: '/automation',
      name: 'automation',
      component: Automation,
      meta: { 
        title: 'Automation',
        requiresAuth: true 
      }
    },
    {
      path: '/customers/documents',
      name: 'customer-documents',
      component: CustomerDocuments,
      meta: { 
        title: 'Customer Documents',
        requiresAuth: true 
      }
    },
    {
      path: '/customers/:id/documents',
      name: 'generate-documents',
      component: GenerateDocuments,
      meta: { 
        title: 'Generate Documents',
        requiresAuth: true 
      }
    },
    {
      path: '/payments',
      name: 'payments',
      component: PaymentsView,
      meta: { 
        title: 'Payments',
        requiresAuth: true 
      }
    }
  ],
})

export default router

router.beforeEach((to, from, next) => {
  document.title = `Vue.js ${to.meta.title} | TailAdmin - Vue.js Tailwind CSS Dashboard Template`
  const isAuthenticated = localStorage.getItem('token') // Replace with your actual auth check
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/signin')
  } else {
    next()
  }
})
