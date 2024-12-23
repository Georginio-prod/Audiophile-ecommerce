import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Earphones from "@/views/Earphones.vue";
import Earph from "@/views/EarphonePr1.vue";


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
    },
    {
        path: '/Product1',
        name: 'product1',
        component: () => import('@/views/Product1.vue')
    },
    {
        path: '/Product2',
        name: 'product2',
        component: () => import('@/views/Product2.vue')
    },
    {
        path: '/Product3',
        name: 'product3',
        component: () => import('@/views/Product3.vue')
    },
    {
        path: '/SpeakerPr1',
        name: 'SpeakerPr1',
        component: () => import('@/views/SpeakerPr1.vue')
    },
    {
        path: '/SpeakerPr2',
        name: 'SpeakerPr2',
        component: () => import('@/views/SpeakerPr2.vue')
    },
    {
        path: '/EarphonePr1',
        name: 'EarphonePr1',
        component: () => import('@/views/EarphonePr1.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;