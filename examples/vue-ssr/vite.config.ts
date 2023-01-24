import { defineConfig } from 'vite'
import VuePlugin from '@vitejs/plugin-vue'
import Pages from '@charrue/vite-plugin-pages'
import type { Plugin } from 'vite'
const config = defineConfig({
  plugins: [
    VuePlugin(),
    Pages() as Plugin,
  ],
  build: {
    minify: false,
  },
})

export default config
