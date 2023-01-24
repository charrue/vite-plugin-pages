import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Pages from '@charrue/vite-plugin-pages'
import { definePageRoutePlugin, resolveRouteBlock } from '@charrue/vite-plugin-pages-extend'
import Inspect from 'vite-plugin-inspect'

const config = defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
    Pages({
      dirs: [
        { dir: resolve(__dirname, './src/pages'), baseRoute: '' },
      ],
      extensions: ['vue', 'tsx', 'jsx'],
      resolveRouteBlock,
    }),
    definePageRoutePlugin(),
    Inspect(),
  ],
})

export default config
