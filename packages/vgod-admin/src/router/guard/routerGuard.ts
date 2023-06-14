import { type Router } from 'vue-router'
import { useRouteStore } from '@/store/route'

export function createRouterGuard(router: Router) {
    const routeStore = useRouteStore()

    router.beforeEach(async (to) => {
        if (!routeStore.isLoadRoute) {
			await routeStore.loadRoutes()
			return to.fullPath
		}

        return true
    })
}
