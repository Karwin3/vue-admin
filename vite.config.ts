import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    return {
        plugins: [
            vue(),
            AutoImport({
                // 支持依赖选项
                imports: ['vue', 'vue-router', 'pinia'],
                eslintrc: {
                    enabled: true
                },
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolver({
                        prefix: 'Icon'
                    })]
            }),
            Components({
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolver({
                        enabledCollections: ['ep']
                    })
                ]
            }),
            Icons({
                autoInstall: true
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        server: {
            proxy: {
                [env.VITE_APP_BASE_PREFIX + '/front']: {
                    target: 'http://39.97.218.60/',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(env.VITE_APP_BASE_PREFIX, '')
                }
            }
        }
    }
})
