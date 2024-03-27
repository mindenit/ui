import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.ts'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-themes',
		'@storybook/addon-a11y',
		'storybook-addon-vue-slots'
	],
	framework: {
		name: '@storybook/vue3-vite',
		options: {
			docgen: 'vue-component-meta'
		}
	},
	docs: {
		autodocs: 'tag'
	}
}

export default config
