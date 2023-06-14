import { ApiDes } from '../typing'
import { aliasToMockUrl } from '../functional'

export const API_LOGIN = '/login'

export const APIDES_LOGIN: ApiDes = {
    desc: '登录接口',
    url: API_LOGIN,
    method: 'post',
    mockUrl: aliasToMockUrl('@/requests/mocks/json/login.json')
}