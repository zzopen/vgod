import { createApp } from 'vue'
import { setupPlugins } from '@/plugin'
import App from './App.vue'

const app = createApp(App)
async function bootstrap() {
    await setupPlugins(app)
    app.mount('#app')
}

await bootstrap()