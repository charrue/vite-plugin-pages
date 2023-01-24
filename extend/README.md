# @charrue/vite-plugin-pages-extend

## Getting Started

### Install
``` bash
npm install -D @charrue/vite-plugin-pages-extend -D
```

### Vite config

``` ts
import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Pages from '@charrue/vite-plugin-pages'
import Inspect from 'vite-plugin-inspect'
import { definePageRoutePlugin, resolveRouteBlock } from '@charrue/vite-plugin-pages-extend'

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
```
