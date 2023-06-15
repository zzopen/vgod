import { type Router } from 'vue-router'

export function createModeGuard(router: Router) {
    router.beforeEach(async (to) => {
        console.log('to:', to)
        // console.log('routes:', router.getRoutes())
        return true
    })
}
