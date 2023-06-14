import { isDevMode } from '@/util'
import { RequestOption } from './typing'

export const getDevRequestOptions = (): RequestOption => {
    if (!isDevMode()) {
        return {}
    }

    return {
        isMock: true
    }
}

export const aliasToMockUrl = (url: string) => {
    if (!url) {
        return ''
    }

    // TODO:: 注意此处的路径是跟随mix.ts文件相对于src目录路径变化而变化
    const mockUrl = new URL(url.replace('@/', '../../'), import.meta.url).href
    // console.log('mockUrl:', mockUrl)
    return mockUrl
}
