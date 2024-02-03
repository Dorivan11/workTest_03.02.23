import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/components/MainPage"
import RedactorPage from "@/components/RedactorPage"
import BasketPage from "@/components/BasketPage"

Vue.use(VueRouter)

const routes=[
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/basket',
        component: BasketPage
    },
    {
        path: '/redactor',
        component: RedactorPage
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})
