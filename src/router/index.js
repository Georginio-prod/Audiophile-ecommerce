import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/HeadPhones',
        name: 'headphones',
        component: () => import('@/views/HeadPhones.vue')
    },
    {
        path: '/Speakers',
        name: 'speakers',
        component: () => import('@/views/Speakers.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;