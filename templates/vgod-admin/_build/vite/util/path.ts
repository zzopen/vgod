import * as path from 'path'

export function pathResolve(dir: string) {
	//console.log(path.resolve(process.cwd(), '.', dir))
	return path.resolve(process.cwd(), '.', dir)
}
