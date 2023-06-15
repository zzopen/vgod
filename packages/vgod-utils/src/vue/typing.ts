import type { ExtractPropTypes } from 'vue'
import type { Fn } from 'src/global'

export 	type VueExtractPropTypes<T extends Fn> = Partial<ExtractPropTypes<ReturnType<T>>>