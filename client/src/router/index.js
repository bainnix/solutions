import { createRouter, createWebHistory } from 'vue-router'
import CreateClient from '@/views/CreateClient.vue'
import SiteLogin from '@/views/SiteLogin.vue'
import ClientLookUp from "@/components/ClientLookUp.vue"
import CreateDocument from "@/views/CreateDocument.vue"
const routes = [
    {
        path:'/',
        name: 'SiteLogin',
        component: SiteLogin

    },
    {
        path:'/CreateClient',
        name: 'CreateClient',
        component: CreateClient

    },
    {
        path:'/ClientLookUp',
        name: 'ClientLookUp',
        component: ClientLookUp

    },
    {
        path:'/CreateDocument',
        name: 'CreateDocument',
        component: CreateDocument

    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    base: process.env.BASE_URL,
    routes
})

export default router
