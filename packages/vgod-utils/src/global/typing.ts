export type Fn<T = any, R = T> = {
    (...arg: T[]): R
}

export type TimeoutHandle = ReturnType<typeof setTimeout>
export type IntervalHandle = ReturnType<typeof setInterval>

export type Nullable<T> = T | null | undefined
export type Stringable<T> = Nullable<T> | string
export type Recordable<T = any> = Record<string, T>
export type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T
}

export type Indexable<T = any> = {
    [key: string]: T
}

export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
}