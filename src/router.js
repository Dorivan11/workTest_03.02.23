import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/components/MainPage"
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
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})
