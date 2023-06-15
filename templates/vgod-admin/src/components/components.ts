// app-home
import {AppHome} from './app/app-home'
export { default as FAppHome} from './app/app-home'
export type {} from './app/app-home'

// app-root
import {AppRoot} from './app/app-root'
export { default as FAppRoot} from './app/app-root'
export type {} from './app/app-root'

// app-provider
import {AppProvider} from './app/app-provider'
export { default as FAppProvider} from './app/app-provider'
export type {} from './app/app-provider'

// page-content
import {PageContent} from './app/page-content'
export { default as FPageContent} from './app/page-content'
export type {} from './app/page-content'

// login
import {Login} from './login'
export { default as FLogin} from './login'
export type {} from './login'

// exception
import {Exception} from './exception'
export { default as FException} from './exception'
export type {} from './exception'

// layout-content
import {LayoutContent} from './layout/content'
export { default as FLayoutContent} from './layout/content'
export type {} from './layout/content'

declare module 'vue' {
  export interface GlobalComponents {
    FAppHome: typeof AppHome
    FAppRoot: typeof AppRoot
    FAppProvider: typeof AppProvider
    FPageContent: typeof PageContent
    FLogin: typeof Login
    FException: typeof Exception
    FLayoutContent: typeof LayoutContent
  }
}