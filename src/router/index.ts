import { createRouter, createWebHistory } from 'vue-router'
import { useTokenStore } from '@/stores/token'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/login/login.vue')
        },
        {
            path: '/',
            name: 'Home',
            redirect: '/dashboard',
            meta: { requiresAuth: true },
            component: () => import('@/layout/index.vue'),
            children: [
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    component: () => import('@/views/dashboard/dashboard.vue')
                },
                {
                    path: '/test',
                    name: 'test',
                    component: () => import('@/views/errorPage/404.vue')
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/views/errorPage/404.vue')
        }
    ]
})

router.beforeEach(to => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const tokenStore = useTokenStore()
        if (tokenStore.token) {
            return true
        } else {
            return { name: 'Login', query: { redirect: to.fullPath } }
        }
    }
    return true
})
export default router
