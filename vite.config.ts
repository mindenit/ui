/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

export default defineConfig({
	plugins: [vue(), dts({ tsconfigPath: 'tsconfig.build.json', cleanVueFileName: true })],
	test: {
		environment: 'jsdom',
		root: fileURLToPath(new URL('./', import.meta.url)),
		globals: false
	},
	build: {
		minify: true,
		modulePreload: false,
		cssMinify: 'lightningcss',
		copyPublicDir: false,
		assetsDir: '',
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es']
		},
		rollupOptions: {
			external: ['vue', '@iconify/vue', '@internationalized/date', '@vueuse/core', 'vee-validate'],
			output: {
				globals: {
					vue: 'Vue',
					'@internationalized/date': '@internationalized/date',
					'vee-validate': 'vee-validate',
					'@iconify/vue': '@iconify/vue',
					'@vueuse/core': '@vueuse/core'
				},
				assetFileNames: (chunkInfo) => {
					if (chunkInfo.name === 'style.css') return 'index.css'
					return chunkInfo.name as string
				}
			}
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
