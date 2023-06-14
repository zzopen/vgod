import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { BUILT_IN_ROUTES } from './typing'

export const router = createRouter({
    history: createWebHistory(), // history路由模式
    routes: BUILT_IN_ROUTES, //BUILT_IN_ROUTES as unknown as RouteRecordRaw[], //BUILT_IN_ROUTES,
    strict: true, // 是否应该禁止尾部斜杠。默认为假
    scrollBehavior: () => ({ left: 0, top: 0 })
})