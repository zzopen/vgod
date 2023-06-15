// login
import {Login} from './login'
export {default as VGLogin} from './login'
export * from './login'

// exception
// import {Exception} from './exception'
// export {default as VGException} from './exception'

declare module 'vue' {
  export interface GlobalComponents {
    VGLogin: typeof Login
    // VGException: typeof Exception
  }
}