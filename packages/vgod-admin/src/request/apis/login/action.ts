import { APIDES_LOGIN } from './des'
import axiosInstance from '@/request/http/axios'
import { LoginReq, LoginRes, convertRes } from './typing'
import { getDevRequestOptions } from '../functional'

export const reqLogin = async (p: LoginReq): Promise<LoginRes> => {
    const option = getDevRequestOptions()
    const res = await axiosInstance.request(APIDES_LOGIN, p, option)
    return convertRes(res)
}