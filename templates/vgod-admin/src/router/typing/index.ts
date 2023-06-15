import { type RouteRecordRaw } from 'vue-router'

export type AppRouteRecordRaw = RouteRecordRaw

export interface Route {
    name: string
    path: string
    childrenName?: string
}

export const ROOT_ROUTE: Route = {
    name: 'Root',
    path: '/'
}

export const LOGIN_ROUTE: Route = {
    name: 'Login',
    path: '/login'
}

export const HOME_ROUTE: Route = {
    name: 'Home',
    path: '/home'
}

export const PAGE_NOT_FOUND_ROUTE: Route = {
    name: 'PageNotFound',
    childrenName: 'PageNotFoundChildren',
    path: '/:pathMatch(.*)*'
}

export const LOGIN_COMPONENT = () => import('@/components/login')
export const ROOT_COMPONENT = () => import('@/components/app/app-root')
export const HOME_COMPONENT = () => import('@/components/app/app-home')
export const EXCEPTION_COMPONENT = () => import('@/components/exception')
export const LAYOUT_COMPONENT = () => import('@/components/layout/index.vue')

export const LoginRoute: AppRouteRecordRaw = {
    name: LOGIN_ROUTE.name,
    path: LOGIN_ROUTE.path,
    component: LOGIN_COMPONENT,
    meta: { title: '登录页面' }
}

export const RootRoute: AppRouteRecordRaw = {
    name: ROOT_ROUTE.name,
    path: ROOT_ROUTE.path,
    component: LAYOUT_COMPONENT,
    redirect: HOME_ROUTE.path,
    children: [
		{
			path: HOME_ROUTE.path,
			name: HOME_ROUTE.name,
			component: () => import('@/components/app/app-home')
		}
	],
    meta: { title: '应用首页' }
}

export const PageNotFoundRoute: AppRouteRecordRaw = {
    path: PAGE_NOT_FOUND_ROUTE.path,
    name: PAGE_NOT_FOUND_ROUTE.name,
    component: EXCEPTION_COMPONENT,
    meta: {
        title: '404'
    },
}

export const BUILT_IN_ROUTES = [
    RootRoute,
    LoginRoute,
    PageNotFoundRoute
]