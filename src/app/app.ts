import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/index.css';
import './index.css';
import {router} from "@/app/router";


createApp(App)
    .use(router)
    .use(ElementPlus)
    .mount('#app');