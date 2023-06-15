import { type UserInfo } from '@/logic/user'

export const USER_INFO_KEY = 'user_info'

export function setUserInfo() {
    clearUserInfo()
    const info: UserInfo = {
        token: '已登录' // todo:: 日后改为传参
    }
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(info))
}

export function clearUserInfo() {
    localStorage.removeItem(USER_INFO_KEY)
}

export function isLogin(): boolean {
    // todo:: 判断登录的逻辑先简单处理
    const info: string = localStorage.getItem(USER_INFO_KEY) ?? ''
    if (!info) {
        return false
    }

    const userInfo: UserInfo = JSON.parse(info) as UserInfo
    if (!userInfo.token) {
        return false
    }

    return true
}