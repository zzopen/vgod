<script setup lang="ts">
import type {FormState} from '@vgod/ui'
import { message } from 'ant-design-vue'
import { useUserStore } from '@/store/user'
import { type LoginReq } from '@/request'

defineOptions({
    name: 'FLogin'
})

const userStore = useUserStore()
const onSubmit = async (formData: FormState) => {
   const loginReq : LoginReq= {
    username: formData.username,
    password: formData.password
   }
   await userStore.login(loginReq)
}

</script>

<template>
    <VGLogin username-placeholder="Username" password-placeholder="123456" @login="onSubmit"/>
</template>
