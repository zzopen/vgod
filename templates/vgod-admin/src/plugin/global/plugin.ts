import { App } from 'vue'
import VGodUi from '@vgod/ui'
import FAdminUi from '@/components'

export default {
    install(app: App) {
        setupGlobal(app)
    }
}

export function setupGlobal(app: App) {
    app.use(VGodUi)
    app.use(FAdminUi)
}
