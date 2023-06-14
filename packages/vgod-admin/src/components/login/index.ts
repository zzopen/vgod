import {withInstall} from '@/components/util'
import login from './Login.vue'

export const Login = withInstall(login)
export default Login

declare module 'vue' {
  export interface GlobalComponents {
    VuLogin: typeof Login;
  }
}