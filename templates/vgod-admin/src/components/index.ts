import type { App, Plugin } from 'vue'
import * as components from './components'
export * from './components'

const INSTALLED_KEY = Symbol("VGOD_ADMIN_UI_INSTALLED_KEY1");

export const install = function (app: App) {
     if ((app as any)[INSTALLED_KEY]) return;
    (app as any)[INSTALLED_KEY] = true;

    const _components = components as unknown as Plugin[] // 必须这么写
    for (const [_, component] of Object.entries(_components)) {
        if (component.install) {
            app.use(component)
        }
    }

    return app
}

export default { install }