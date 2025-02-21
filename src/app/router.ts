import {createMemoryHistory, createRouter,} from 'vue-router';
import type {RouteRecordRaw} from 'vue-router';
import ThePasswordView from "@/modules/passwords/ThePasswordsView.vue";

const routes = {
    home: {path: '/', redirect: '/passwords-list'},
    /*login: {path: '/about', component: AboutView},*/
    passwordsList: {
        path: '/passwords-list',
        component: ThePasswordView
    },
} satisfies Record<string, RouteRecordRaw>;


const router = createRouter({
    history: createMemoryHistory(),
    routes: Object.values(routes),
});

export {
    router
}