import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'ant-design-vue'
import type { RequestOption, ApiInfo, CustomResponse, RequestMode } from './typing'
import { GLOBALL_REQUEST_MODE, RequestModeEnum} from './typing'
import { timeSleep } from '@/util'

class AxiosRequest {
    public readonly instance: AxiosInstance
    public readonly mode: RequestMode

    public constructor() {
        this.mode = GLOBALL_REQUEST_MODE
        this.instance = axios.create({
            baseURL: '/', // 所有的请求地址前缀部分
            timeout: 100000, // 请求超时时间毫秒,10s
            withCredentials: true, // 异步请求携带cookie
            headers: {
                'Content-Type': 'application/json'
            }
        })

        this.initInterceptors()
    }

    private async realRequest(url: string, method:string, param: any) {
        let res: any
        if (method == 'get') {
            res = await this.instance.get(url, { params: param })
        } else if (method == 'post') {
            res = await this.instance.post(url, param)
        } else {
            throw new Error(`不支持的请求方式${method}`)
        }

        return res
    }

    // 处理请求的方法
    public async request(apiInfo: ApiInfo, p: any = {}, opt?: RequestOption) {
        const res: CustomResponse = {
            code: '',
            data: {},
            msg: '',
            isSuccess: false
        }

        const { method, url } = apiInfo
        p = p ?? {}
        const options = opt ?? {}
        const { isMock, sleep, mockFn } = options
        if (mockFn && (isMock || (this.mode == RequestModeEnum.MOCK))) {
            let _res = mockFn()
            res.code = _res.code
            res.data = _res.data
            res.msg = _res.msg
            res.isSuccess = _res.code == '200'
        } else {
            let _res = this.realRequest(url, method, p)
            const {code, data, msg} = await _res
            res.code = code
            res.data = data
            res.msg = msg
            res.isSuccess = code == '200'
        }
        
        if (true) {
            // 打印请求日志
            const resLogBody = {
                url: url,
                desc: apiInfo.desc,
                response: res
            }
            console.log("接口返回信息:" + JSON.stringify(resLogBody))
        }

        if (sleep) {
            await timeSleep(sleep)
        }

        return res
    }

    private initInterceptors() {
        this.setRequestInterceptor()
        this.setResponseInterceptor()
    }

    private setRequestInterceptor() {
        this.instance.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                return config
            },
            (error: any) => {
                console.log(error)
                return Promise.reject(error)
            }
        )
    }

    private setResponseInterceptor() {
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                if (response.status == 200) {
                    // 讲道理，此处应该定义成统一类型
                    const { code, data, msg } = response.data
                    if (code == 0) {
                        return Promise.resolve(data)
                    }

                    console.log('接口调用错误:', response.data)
                    message.warn(msg || '网络异常，建议您刷新页面或者稍后再试')
                } else {
                    this.errorHandle(response)
                }

                return Promise.reject('网络异常，建议您刷新页面或者稍后再试')
            },
            (error: any) => {
                const { response } = error
                if (response) {
                    this.errorHandle(response)
                    return Promise.reject(response.data)
                } else {
                    message.warn('网络连接异常,请稍后再试!')
                }
            }
        )
    }

    private errorHandle(res: any) {
        // 状态码判断
        switch (res.status) {
            case 401:
                break
            case 403:
                break
            case 404:
                message.warn('请求的资源不存在')
                break
            default:
                message.warn('连接错误')
        }
    }
}
export default new AxiosRequest()
