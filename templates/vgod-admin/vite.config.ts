import vue from '@vitejs/plugin-vue'
import { defineConfig, UserConfig, ConfigEnv } from 'vite'
import { createVitePlugins, viteLoadEnv, pathResolve } from './_build/vite'

// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv): UserConfig => {
    // 加载环境变量
    const { mode } = configEnv
    const viteEnv = viteLoadEnv(mode, process.cwd())
    const { VITE_PORT } = viteEnv

    return {
        plugins: createVitePlugins(viteEnv),
        server: {
            open: true,
            port: VITE_PORT
        },
        build: {
            target: 'esnext',
            cssTarget: 'chrome80',
            outDir: 'dist',
            chunkSizeWarningLimit: 2000
        },
        resolve: {
            // 配置路径别名
            alias: [
                {
                    find: '@',
                    replacement: `${pathResolve('src')}`
                }
            ]
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true
                },
                scss: {
                    additionalData: '@import "@/components/style/index.scss";'
                }
            }
        },
        optimizeDeps: {
            include: ['vue', 'ant-design-vue/es/locale/zh_CN', 'ant-design-vue/es/locale/en_US']
        }
    }
})
