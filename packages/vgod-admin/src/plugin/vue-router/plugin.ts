import { type App } from 'vue'
import { router } from '@/router'
import { setupRouterGuard } from '@/router/guard'

export default {
	install(app: App) {
		setupRouter(app)
	}
}

export function setupRouter(app: App) {
	app.use(router)
    setupRouterGuard(router)
}