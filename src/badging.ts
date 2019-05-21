import { Value } from './index'

const warn = () => {
  console.warn(
    'Badging API is not enabled. Please check here how you can enable it: https://developers.google.com/web/updates/2018/12/badging-api#use'
  )
}

export function isAvailable() {
  return 'ExperimentalBadge' in window
}

export function set(value: Value) {
  if (!isAvailable()) {
    warn()
    return
  }

  ;(<any>window).ExperimentalBadge.set(value)
}

export function clear() {
  if (!isAvailable()) {
    warn()
    return
  }

  ;(<any>window).ExperimentalBadge.clear()
}
