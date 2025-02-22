import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { URL, fileURLToPath } from 'node:url';
import VueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config
export default defineConfig({
    plugins: [
        vue(),
        VueDevTools(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src/app', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            scss: { api: 'modern-compiler', },
        },
    },
});