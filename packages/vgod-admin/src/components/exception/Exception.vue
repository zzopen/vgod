<template>
    <div>
        <a-result status="404" title="404" sub-title="页面不存在">
            <template #extra>
                <a-button type="primary" @click="onBack"> 返回首页 </a-button>
            </template>
        </a-result>
    </div>
</template>
<script setup lang="ts">
import { HOME_ROUTE } from '@/router'

defineOptions({
    name: 'vu-exception'
});
const { onBack } = useBack()

function useBack() {
    const router = useRouter()
    const onBack = () => {
        router.push(HOME_ROUTE)
    }
    return {
        onBack
    }
}
</script>

<style scoped lang="scss"></style>
