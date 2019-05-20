import merge from 'lodash.merge'
import * as badging from './badging'
import * as favicon from './favicon'
import * as title from './title'
import isEmpty from './isEmpty'

export type Value = number | null

export interface Interface {
  set: (value: Value) => void
  clear: () => void
}

export type Method = 'Badging' | 'Favicon' | 'Title'

export interface Options {
  method: Method
  favicon: favicon.Options
}

const defaultOptions: Options = {
  method: badging.isAvailable()
    ? 'Badging'
    : favicon.isAvailable()
    ? 'Favicon'
    : 'Title',
  favicon: favicon.defaultOptions,
}

/**
 * Sets badge
 */
export function set(value: Value, options: Options = defaultOptions) {
  const mergedOptions = merge({}, defaultOptions, options)

  if (isEmpty(value)) {
    clear(mergedOptions)
    return
  }

  switch (mergedOptions.method) {
    case 'Badging': {
      badging.set(value)
      return
    }

    case 'Favicon': {
      favicon.set(value, mergedOptions.favicon)
      return
    }

    default: {
      title.set(value)
    }
  }
}

/**
 * Clears badge
 */
export function clear(options: Options = defaultOptions) {
  const mergedOptions = merge({}, defaultOptions, options)
  switch (mergedOptions.method) {
    case 'Badging': {
      badging.clear()
      return
    }

    case 'Favicon': {
      favicon.clear(mergedOptions.favicon)
      return
    }

    default: {
      title.clear()
    }
  }
}
