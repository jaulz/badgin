import { Value } from './index'
import isPositiveNumber from './isPositiveNumber'

// The actual API can be tracked here: https://github.com/wicg/badging/
// Most likely it will change to: navigator.setAppBadge and navigator.clearAppBadge
declare global {
  interface Window {
    ExperimentalBadge?: {
      set: (value?: number) => void
      clear: () => void
    }
  }
}

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
  value: 0,
}

export function isAvailable() {
  if (!current.mediaQuery) {
    current.mediaQuery = window.matchMedia('(display-mode: standalone)')

    // Get notified once app is installed
    current.mediaQuery.onchange = event => {
      set(current.value)
    }
  }

  return (
    current.mediaQuery.matches &&
    'ExperimentalBadge' in window &&
    !!window.ExperimentalBadge
  )
}

export function set(value: Value) {
  current.value = value

  if (!isAvailable()) {
    warn()
    return false
  }

  // Sets the badge to contents (an integer), or to "flag" if contents is omitted. If contents is 0, clears the badge for the matching app(s).
  // See details here: https://github.com/WICG/badging/blob/master/explainer.md#the-api
  window.ExperimentalBadge!.set(value)
  return true
}

export function clear() {
  if (!isAvailable()) {
    return
  }

  window.ExperimentalBadge!.clear()
}
