import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth/login',
      name: 'LoginIndex',
      meta: {
        layout: AuthLayout
      },
      component: () => import('@/modules/auth/views/LoginView.vue')
    }
  ]
})

export default router
