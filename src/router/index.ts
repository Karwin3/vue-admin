import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/layout/index.vue'),
            redirect: '/dashboard',
            children: [
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    component: () => import('@/views/dashboard/index.vue')
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/views/errorPage/index.vue')
        }
    ]
})

export default router
