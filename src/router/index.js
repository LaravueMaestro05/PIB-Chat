import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";

import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";

const routes = [
    { path: '/signin', component: Login },
    { path: '/signup', component: Signup }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;