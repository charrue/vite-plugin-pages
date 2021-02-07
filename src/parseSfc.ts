import { parse } from '@vue/compiler-sfc'
import JSON5 from 'json5'
import YAML from 'yaml'

export interface CustomBlock {
  type: string
  content: string
}

export interface ParseResult {
  customBlocks: CustomBlock[]
}

export function parseSFC(code: string): ParseResult {
  try {
    return parse(code, {
      pad: 'space',
    }).descriptor
  }
  catch {
    throw new Error('[vue-route-generator] Vue3\'s "@vue/compiler-sfc" is required.')
  }
}

export interface FileError extends Error {
  file?: string
}

export function tryParseCustomBlock(
  content: string,
  filePath: string,
  blockName: string): any {
  try {
    return JSON5.parse(content)
  }
  catch (err) {
    try {
      return YAML.parse(content)
    }
    catch {
      const wrapped: FileError = new Error(`Invalid JSON/JSON5/YAML format of <${blockName}> content in ${filePath}\n${err.message}`)

      // Store file path to provide useful information to downstream tools
      // like friendly-errors-webpack-plugin
      wrapped.file = filePath

      throw wrapped
    }
  }
}
