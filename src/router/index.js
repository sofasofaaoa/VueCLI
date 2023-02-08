import {createRouter, createWebHistory} from 'vue-router'
import store from "@/store";

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next();
        return;
    }
    next('/');
};

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
        return;
    }
    next('/login');
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: function () {
            return import('../views/HomeView.vue');
        },
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/login',
        name: 'login',
        component: function () {
            return import('@/views/Login.vue');
        },
        beforeEnter: ifNotAuthenticated,
    },
    {path: '/catalog', name: 'catalog',
        component: function () {
            return import('@/views/Catalog.vue');
        },
    },
    {path: '/signup', name: 'signup',
        component: function () {
            return import('@/views/SignUp.vue');
        },
        beforeEnter: ifNotAuthenticated,
    },
    {path: '/cart', name: 'cart',
        component: function () {
            return import('@/views/Cart.vue');
        },
        beforeEnter: ifAuthenticated,
    },
    {path: '/orders', name: 'orders',
        component: function () {
            return import('@/views/Orders.vue');
        },
        beforeEnter: ifAuthenticated,
    },
    {path: '/logout',  name: 'logout',
        component: function () {
            return import('@/views/Logout.vue');
        },
        beforeEnter: ifAuthenticated
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router
