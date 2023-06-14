# vgod-admin
基于vgod-ui开发的后台系统

[vue官方文档](https://cn.vuejs.org/api/general.html)
[vite官方文档](https://cn.vitejs.dev/guide/env-and-mode.html)
[vite config](https://vitejs.dev/config/)
[vue-router](https://router.vuejs.org/zh/installation.html)
[ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn)
[pinia](https://pinia.web3doc.top/getting-started.html)
[tsconfig.json](https://www.typescriptlang.org/tsconfig#files)
[yarn v2](https://yarnpkg.com/)
[pnpm](https://pnpm.io/zh/scripts)

# 创建项目，安装依赖
```shell
pnpm add vue@latest
pnpm add vue-router@4
pnpm add pinia
pnpm add axios
pnpm add dayjs
pnpm add mitt
pnpm add ant-design-vue
pnpm add @ant-design/icons-vue
pnpm add @vueuse/core
pnpm add -D unplugin-auto-import
pnpm add -D unplugin-vue-components
pnpm add -D @types/node
pnpm add -D sass
pnpm add -D normalize.css

// 以下是lint之类的包，不强制
pnpm add -D stylelint stylelint-config-standard-scss  stylelint-config-recess-order

pnpm add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript

pnpm add -D eslint
pnpm add -D husky
pnpm add -D lint-staged
```