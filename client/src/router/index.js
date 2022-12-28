import { createRouter, createWebHistory } from 'vue-router'
import CreateClient from '@/views/CreateClient.vue'
import SiteLogin from '@/views/SiteLogin.vue'
import ClientLookUp from "@/components/ClientLookUp.vue"
import CreateDocument from "@/views/CreateDocument.vue"
import CreatePatient from "@/views/CreatePatient.vue"
import CreateInternalUser from "@/views/CreateInternalUser.vue"
import UserProfile from "@/views/UserProfile.vue"
import CalendarScheduler from "@/views/CalendarScheduler.vue"





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
        path:'/CreatePatient',
        name: 'CreatePatient',
        component: CreatePatient

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
    {
        path:'/CreateInternalUser',
        name: 'CreateInternalUser',
        component: CreateInternalUser

    },
    {
        path:'/UserProfile',
        name: 'UserProfile',
        component: UserProfile
    },
    {
        path:'/CalendarScheduler',
        name: 'CalendarScheduler',
        component: CalendarScheduler
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    base: process.env.BASE_URL,
    routes
})

export default router
