import type { ExtractPropTypes } from 'vue'

export const loginProps = () => ({
    usernamePlaceholder:{ type: String, default: '' },
    passwordPlaceholder:{ type: String, default: '' }
})

export type LoginProps = Partial<ExtractPropTypes<ReturnType<typeof loginProps>>>;

export interface FormState {
    username: string
    password: string
}