import type { PropType } from 'vue'

export interface LoginProps {
    username_placeholder?: string
    password_placeholder?: string
    submit?: () => {}
}

export interface FormState {
    username: string
    password: string
}