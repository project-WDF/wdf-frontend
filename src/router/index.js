import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/HomePage.vue'),
      children: [
        {
          path: 'annual-report',
          component: () => import('@/views/AnnualReportView.vue')
        },
        {
          path: 'annual-approval',
          component: () => import('@/views/AnnualApprovalView.vue')
        },
        {
          path: 'depart-annual-report',
          component: () => import('@/views/DepartAnnualReportView.vue')
        },
        {
          path: 'depart-annual-approval',
          component: () => import('@/views/DepartAnnualApprovalView.vue')
        },
        {
          path: 'diary',
          component: () => import('@/views/DiaryView.vue')
        },
        {
          path: 'user-management',
          component: () => import('@/ByPass.vue'),
          meta: { parentId: 'management' }, // 부모 route의 meta 필드는 children meta에 상속됨
          children: [
            {
              path: 'hr',
              component: () => import('@/views/hr/HrManagementView.vue')
            },
            {
              path: 'register',
              component: () => import('@/views/hr/EmployeeRegistrationView.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
