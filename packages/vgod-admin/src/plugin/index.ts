import { App } from 'vue'
import { setupGlobal } from './global/plugin'
import { setupError } from './error/plugin'
import { setupAntDesignVue } from './ant-design/plugin'
import { setupStore } from './pinia/plugin'
import { setupRouter } from './vue-router/plugin'

export async function setupPlugins(app: App) {
    // 异步加载请使用 setupXXX
    // 同步加载请使用 installXXX
    setupGlobal(app)
    setupError(app)
    setupAntDesignVue(app)
    setupStore(app)
    setupRouter(app)
}
