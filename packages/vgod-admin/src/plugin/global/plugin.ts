import { App } from 'vue'
import VGodUI from '@vgod/ui'

export default {
    install(app: App) {
        setupGlobal(app)
    }
}

export function setupGlobal(app: App) {
    app.use(VGodUI)
}
