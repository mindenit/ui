import { addComponentsDir, defineNuxtModule } from '@nuxt/kit'
import { type NuxtModule } from '@nuxt/schema'
import { resolve } from 'path'

interface ModuleOptions {
	prefix: string
}

const module: NuxtModule<ModuleOptions> = defineNuxtModule<ModuleOptions>({
	meta: {
		name: '@mindenit-ui/nuxt',
		configKey: 'mindenit',
		compatibility: {
			nuxt: '>=3.0.0'
		}
	},
	defaults: {
		prefix: ''
	},
	setup(options) {
		addComponentsDir({
			path: resolve(import.meta.dirname, '../src/components'),
			prefix: options.prefix
		})
	}
})

export default module
