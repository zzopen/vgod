import {withInstall} from '@/components/util'
import layoutContent from './LayoutContent.vue'

export const LayoutContent = withInstall(layoutContent)
export default LayoutContent

declare module 'vue' {
  export interface GlobalComponents {
    VuLayoutContent: typeof LayoutContent;
  }
}