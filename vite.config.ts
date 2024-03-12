/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

export default defineConfig({
	plugins: [vue(), dts()],
	test: {
		environment: 'jsdom',
		root: fileURLToPath(new URL('./', import.meta.url)),
		globals: false
	},
	optimizeDeps: {
		exclude: ['radix-vue']
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'MindenitUI',
			fileName: 'mindenit-ui'
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	}
})
