import { dayjs } from '../dayjs'
export const now = (): string => {
    return dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
}

// 延迟函数
export const timeSleep = (time: any) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}