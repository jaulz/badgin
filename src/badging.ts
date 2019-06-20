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

const current: { mediaQuery: MediaQueryList | null; value: Value } = {
  mediaQuery: null,
  value: null,
}

export function isAvailable() {
  if (!current.mediaQuery) {
    current.mediaQuery = window.matchMedia('(display-mode: standalone)')

    // Get notified once app is installed
    current.mediaQuery.onchange = event => {
      set(current.value)
    }
  }

  return current.mediaQuery.matches && 'ExperimentalBadge' in window
}

export function set(value: Value) {
  if (!isAvailable()) {
    warn()
    return
  }

  current.value = value
  ;(<any>window).ExperimentalBadge.set(value)
}

export function clear() {
  if (!isAvailable()) {
    return
  }

  ;(<any>window).ExperimentalBadge.clear()
}
