import {withInstall} from '@vgod/utils'
import login from './src/login.vue'

export const VGLogin = withInstall(login)
export default VGLogin

declare module 'vue' {
  export interface GlobalComponents {
    VGLogin: typeof VGLogin;
  }
}