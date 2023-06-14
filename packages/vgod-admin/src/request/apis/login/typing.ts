// 参数
interface LoginReq {
    username: string
    password: string
}

// 返回值
interface LoginRes {
    id: string
    name: string
    age: string
}

export type { LoginReq, LoginRes }

function convertRes(res: any): LoginRes {
    return {
        id: res.id ?? '',
        name: res.name ?? '',
        age: '21'
    }
}


export { convertRes }