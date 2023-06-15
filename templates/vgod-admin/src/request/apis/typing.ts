export interface Response {
    code: string | number
    data: any
    [propName: string]: any
}

export interface RequestOption {
    isMock?: boolean
    sleep?: number | string
    [propName: string]: any
}

export interface ApiDes {
    desc: string // 描述
    url: string // 对应后端接口地址
    method: string // 请求方式
    mockUrl?: string // mock地址
    [propName: string]: any
}