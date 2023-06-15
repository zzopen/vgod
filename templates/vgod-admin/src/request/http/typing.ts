export type HttpResponse = {
	code: string | number
	data: any
    msg: string
}

export type CustomResponse = {
	code: string | number
	data: any
    msg: string
    isSuccess: boolean
}

export type MockReqFn = (...args: any) => HttpResponse

export enum RequestModeEnum {
    PRODUCTION = 'production',
    MOCK = 'mock',
}

export type RequestMode = RequestModeEnum.PRODUCTION | RequestModeEnum.MOCK
export const GLOBALL_REQUEST_MODE:RequestMode = RequestModeEnum.MOCK

export type RequestOption = {
	mock?: boolean
	sleep?: number | string
    mockFn?: MockReqFn
	[propName: string]: any
}

export type ApiInfo = {
	desc: string // 描述
	url: string // 对应后端接口地址
	method: string // 请求方式
	[propName: string]: any
}