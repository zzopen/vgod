import { type Router } from 'vue-router'
import { createModeGuard } from './modeGuard'
import { createLoginGuard } from './loginGuard'
import { createRouterGuard } from './routerGuard'

export function setupRouterGuard(router: Router) {
    // 顺序不能随意修改，有先后依赖
    createModeGuard(router)
    createRouterGuard(router)
    createLoginGuard(router)
}
