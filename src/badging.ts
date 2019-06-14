import { Value } from './index'

let warnedBefore = false
const warn = () => {
  if (warnedBefore) {
    return
  }

  console.warn(
    'Application must run in standalone mode and Badging API must be enabled. Please check here how you can enable it: https://developers.google.com/web/updates/2018/12/badging-api#use'
  )
  warnedBefore = true
}

export function isAvailable() {
  return (
    window.matchMedia('(display-mode: standalone)').matches &&
    'ExperimentalBadge' in window
  )
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
    return
  }

  ;(<any>window).ExperimentalBadge.clear()
}
