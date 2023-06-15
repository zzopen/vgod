import { type Router } from 'vue-router'
import { useRouteStore } from '@/store/route'
import { isLogin } from '@/logic'

export function createRouterGuard(router: Router) {
    const routeStore = useRouteStore()

    router.beforeEach(async (to) => {
        if (!isLogin) {
            return true
        }

        if (!routeStore.isLoadRoute) {
			await routeStore.loadRoutes()
			return to.fullPath
		}

        return true
    })
}
