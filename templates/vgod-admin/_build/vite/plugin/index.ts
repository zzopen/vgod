import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { pathResolve } from '../util/path'

export function createVitePlugins(viteEnv: any) {
    // const { VITE_PORT } = viteEnv

    const vitePlugins: PluginOption[] = [vue()]

    // 自动导入
    vitePlugins.push(
        AutoImport({
            imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'], // 自动导入vue和vue-router相关函数
            dts: 'src/auto-import.d.ts' // 生成 `auto-import.d.ts` 全局声明
        })
    )

    // 自动导入ant-design-vue组件
    vitePlugins.push(
        Components({
            dirs: [], // 清空默认值
            resolvers: [AntDesignVueResolver()]
        })
    )

    // icons
    // vitePlugins.push(
    //     createSvgIconsPlugin({
    //         // 指定要缓存的文件夹
    //         iconDirs: [`${pathResolve('src/assets/icons')}`],
    //         // 指定symbolId格式
    //         symbolId: '[name]'
    //     })
    // )

    // vue-i18n
    // vitePlugins.push(
    //     VueI18nPlugin({
    //         include: `${pathResolve('src/locales/**')}`
    //     })
    // )

    return vitePlugins
}
