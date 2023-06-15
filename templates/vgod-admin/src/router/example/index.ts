import { type AppRouteRecordRaw } from '@/router'

export async function loadAsyncRoutes() {
    const asyncRoutes: AppRouteRecordRaw[] = []
    const modules = import.meta.glob('./page/**/*.ts')
    for (const key of Object.keys(modules)) {
        const mod = (<any>await modules[key]()).default
        asyncRoutes.push(mod)
    }

    return asyncRoutes
}
