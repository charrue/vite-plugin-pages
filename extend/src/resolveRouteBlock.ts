export const MACROS_KEY = 'definePageRoute'
export const MACROS_KEY_RE = /definePageRoute\(([\s\S]*?)\);?/g
export const MACROS_FN_STR = `function ${MACROS_KEY}(config) { return config };`

export const isJsx = (filePath: string) => {
  return filePath.endsWith('.jsx') || filePath.endsWith('.tsx')
}

export const resolveRouteBlock = (content: string, filePath: string) => {
  if (isJsx(filePath) && content.includes(MACROS_KEY)) {
    const body = content.match(MACROS_KEY_RE)?.[0]
    if (body) {
      // eslint-disable-next-line no-new-func
      const routeConfig = new Function(`${MACROS_FN_STR} return ${body}`)()
      return routeConfig
    }
  }
}
