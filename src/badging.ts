import { Value } from './index'

const warn = () => {
  console.warn(
    'Badging API is not enabled. Please check here how you can enable it: https://developers.google.com/web/updates/2018/12/badging-api#use'
  )
}

export function set(value: Value) {
  if (!('ExperimentalBadge' in window)) {
    warn()
    return
  }

  ;(<any>window).ExperimentalBadge.set(value)
}

export function clear() {
  if (!('ExperimentalBadge' in window)) {
    warn()
    return
  }

  ;(<any>window).ExperimentalBadge.clear()
}
