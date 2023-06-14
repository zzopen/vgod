import { RouteRecordRaw } from 'vue-router'
import { LAYOUT_COMPONENT } from '@/router'

const dashboard: RouteRecordRaw = {
	path: '/dashboard',
	name: 'Dashboard',
	component: LAYOUT_COMPONENT,
	redirect: '/dashboard/workbench',
	children: [
		{
			path: 'workbench',
			name: 'Workbench',
			component: () => import('@/view/example/dashboard/workbench/index.vue')
		},
		{
			path: 'workbench1',
			name: 'Workbench1',
			component: () => import('@/view/example/dashboard/workbench1/index.vue')
		}
	]
}

export default dashboard
