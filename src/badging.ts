import { Value } from './index'

// The actual API can be tracked here: https://github.com/wicg/badging/
// Most likely it will change to: navigator.setAppBadge and navigator.clearAppBadge

let warnedBefore = false
const warn = () => {
  if (warnedBefore) {
    return
  }

  // We will only warn the user if the Badging API is not available at all
  if ('ExperimentalBadge' in window) {
    return
  }

  console.warn(
    'Badging API must be enabled. Please check here how you can enable it: https://developers.google.com/web/updates/2018/12/badging-api#use'
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
  current.value = value

  if (!isAvailable()) {
    warn()
    return false
  }

  ;(<any>window).ExperimentalBadge.set(value)
  return true
}

export function clear() {
  if (!isAvailable()) {
    return
  }

  ;(<any>window).ExperimentalBadge.clear()
}
