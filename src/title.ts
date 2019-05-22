import { Value } from './index'
import isIndicator from './isIndicator'
import isPositiveNumber from './isPositiveNumber'

let original = ''

export type Options = {
  indicator: string
}

export const defaultOptions: Options = {
  indicator: '!',
}

export function set(value: Value, options: Options) {
  if (!original) {
    original = document.title
  }

  if (isIndicator(value)) {
    document.title = `(${options.indicator}) ${original}`
    return
  }

  if (isPositiveNumber(value)) {
    document.title = `(${value}) ${original}`
    return
  }

  document.title = original
}

export function clear() {
  document.title = original
}
