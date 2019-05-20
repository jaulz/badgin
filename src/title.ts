import { Value } from './index'

const original = document.title

export function set(value: Value) {
  document.title = `(${value}) ${original}`
}

export function clear() {
  document.title = original
}
