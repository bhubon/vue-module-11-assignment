// router.js
import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../components/Dashboard.vue';
import Login from '../components/Login.vue';
import Reegister from '../components/Register.vue';


const routes = [
    {
        path: '/', component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
    { path: '/login', component: Login },
    { path: '/register', component: Reegister },
];

const isAuthenticated = () =>  localStorage.getItem('token') == 111 


const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated()) {
        next('/login');
    } else {
        next();
    }
})

export default router;