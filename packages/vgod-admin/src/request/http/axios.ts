import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'ant-design-vue'
import { RequestOption, ApiInfo } from './typing'
import { timeSleep } from '@/util'

class AxiosRequest {
    public readonly instance: AxiosInstance

    public constructor() {
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

    // 处理请求的方法
    public async request(apiInfo: ApiInfo, param: any = {}, option?: RequestOption) {
        const { method, url, mockUrl } = apiInfo
        param = param ?? {}
        const options = option ?? {}
        const { isMock, sleep } = options
        const realUrl = isMock && mockUrl ? mockUrl : url

        const resLog = {
            url: realUrl,
            desc: apiInfo.desc,
            response: null
        }

        let res: any
        if (method == 'get') {
            res = await this.instance.get(realUrl, { params: param })
        } else if (method == 'post') {
            res = await this.instance.post(realUrl, param)
        } else {
            throw new Error(`不支持的请求方式${method}`)
        }

        resLog.response = res
        if (true) {
            // console.log("接口返回信息:" + JSON.stringify(resLog))
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
