import { ApiDes } from '../typing'
import { aliasToMockUrl } from '../functional'

export const API_LOGIN = '/login'

export const APIDES_LOGIN: ApiDes = {
    desc: '登录接口',
    url: API_LOGIN,
    method: 'post',
    mockUrl: aliasToMockUrl('@/requests/mocks/json/login.json')
}

// 参数
export interface LoginReq {
    username: string
    password: string
}

// 返回值
export interface LoginRes {
    id: string
    name: string
    age: string
}

export function convertRes(res: any): LoginRes {
    return {
        id: res.id ?? '',
        name: res.name ?? '',
        age: '21'
    }
}