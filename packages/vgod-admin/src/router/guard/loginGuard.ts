import { type Router } from 'vue-router'
import { LOGIN_ROUTE, HOME_ROUTE } from '@/router'
import { isLogin } from '@/logic'

export function createLoginGuard(router: Router) {
    router.beforeEach(async (to) => {
        if (!isLogin()) {
            if (to.path == LOGIN_ROUTE.path) {
                return true
            }

            return { name: LOGIN_ROUTE.name }
        }

        // 登录以后还要进入登录页，重定向到首页
        if (to.name === LOGIN_ROUTE.name) {
            return { name: HOME_ROUTE.name }
        }

        return true
    })
}
