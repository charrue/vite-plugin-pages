import { MACROS_FN_STR, MACROS_KEY, isJsx } from './resolveRouteBlock'
import type { Plugin } from 'vite'

export function definePageRoutePlugin(): Plugin {
  return {
    name: 'charrue:definePageRoute',
    enforce: 'pre',

    async transform(code, id) {
      const [filepath] = id.split('?')

      if (isJsx(filepath)) {
        if (!code.includes(MACROS_KEY)) return code
        return `${MACROS_FN_STR}\n${code}`
      }

      return code
    },
  }
}
