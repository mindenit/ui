import { addComponentsDir, createResolver, defineNuxtModule, installModule } from '@nuxt/kit'
import { type NuxtModule } from '@nuxt/schema'

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
	async setup(options, nuxt) {
		const resolver = createResolver(import.meta.url)

		nuxt.options.css.push(resolver.resolve('./dist/output.css'))

		nuxt.options.modules.push('@nuxtjs/tailwindcss')
		await installModule('@nuxtjs/tailwindcss', {
			configPath: resolver.resolve('./tailwind.config.js')
		})

		addComponentsDir({
			path: resolver.resolve('./src/components'),
			pathPrefix: false,
			prefix: options.prefix,
			global: true
		})
	}
})

export default module
