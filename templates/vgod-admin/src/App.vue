<template>
    <AConfigProvider>
        <FAppProvider>
            <RouterView />
        </FAppProvider>
    </AConfigProvider>
</template>

<script setup lang="ts">
// const getAntdLocale = 'zh_CN'
</script>

<style>
#app {
    width: 100%;
    height: 100%;
}
</style>
