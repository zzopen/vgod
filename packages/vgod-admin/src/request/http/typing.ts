type RequestResponse = {
	code: string | number
	data: any
	[propName: string]: any
}

type RequestOption = {
	isMock?: boolean
	sleep?: number | string
	[propName: string]: any
}

type ApiInfo = {
	desc: string // 描述
	url: string // 对应后端接口地址
	method: string // 请求方式
	mockUrl?: string // mock地址
	[propName: string]: any
}

export type { ApiInfo, RequestResponse, RequestOption }
