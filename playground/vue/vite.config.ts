import MindenitUiResolver from '@midenit/ui/resolver'
import Tailwind from '@tailwindcss/vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Vue(),
    Tailwind(),
    Components({
      dts: true,
      resolvers: [
        MindenitUiResolver({
          prefix: 'U',
        }),
      ],
    }),
  ],
})
