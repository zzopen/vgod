import { App, Component } from 'vue'
import * as antIcons from '@ant-design/icons-vue'
import 'ant-design-vue/dist/antd.css'

export default {
	install(app: App) {
		setupAntDesignVue(app)
	}
}

export function setupAntDesignVue(app: App) {
	// icon组件注册为全局组件
	const icons: Component = antIcons
	for (const i in icons) {
		app.component(i, icons[i])
	}
}
