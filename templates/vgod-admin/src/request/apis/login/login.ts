import axiosInstance from '@/request/http/axios'
import { RequestOption } from '@/request/http'
import { APIDES_LOGIN, LoginReq, LoginRes, convertRes } from './typing'
import {mockRqeLogin} from './mock'

export const reqLogin = async (p:LoginReq, opt?:RequestOption): Promise<LoginRes> => {
    const res = await axiosInstance.request(APIDES_LOGIN, p, {...opt, mockFn:mockRqeLogin})
    return convertRes(res)
}