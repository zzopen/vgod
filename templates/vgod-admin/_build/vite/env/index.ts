import { loadEnv, ConfigEnv } from 'vite'

export type ViteEnv = {
	VITE_PORT: number
}

export function viteLoadEnv(mode: string, root: string) {
	return wrapperEnv(loadEnv(mode, root))
}

function wrapperEnv(envs: Record<string, any>): ViteEnv {
	const res: ViteEnv = {} as ViteEnv
	for (const envName of Object.keys(envs)) {
		let realName = envs[envName].replace(/\\n/g, '\n')

		// 自定义布尔类型转化
		realName = realName === 'true' ? true : realName === 'false' ? false : realName

		// 端口类型强转
		if (envName === 'VITE_PORT') {
			realName = Number(realName)
		}

		// 添加到 process.env
		if (typeof realName === 'string') {
			process.env[envName] = realName
		} else if (typeof realName === 'object') {
			process.env[envName] = JSON.stringify(realName)
		}

		res[envName] = realName
	}

	return res
}
