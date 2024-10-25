import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Earphones from "@/views/Earphones.vue";


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
    },
    {
        path: '/Earphones',
        name: 'Earphones',
        component: Earphones
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;