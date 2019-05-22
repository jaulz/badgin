import merge from 'lodash.merge'
import * as badging from './badging'
import * as favicon from './favicon'
import * as title from './title'

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
}

export type Value = number | null | undefined

export interface Interface {
  set: (value: Value) => void
  clear: () => void
}

export type Method = 'Badging' | 'Favicon' | 'Title'

export interface Options {
  method: Method
  favicon: favicon.Options
  title: title.Options
}

const getDefaultOptions = (): Options => {
  return {
    method: badging.isAvailable()
      ? 'Badging'
      : favicon.isAvailable()
      ? 'Favicon'
      : 'Title',
    favicon: favicon.defaultOptions,
    title: title.defaultOptions,
  }
}

/**
 * Sets badge
 */
export function set(
  value: Value,
  options: DeepPartial<Options> = getDefaultOptions()
) {
  const mergedOptions = merge({}, getDefaultOptions(), options)

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
      title.set(value, mergedOptions.title)
    }
  }
}

/**
 * Clears badge
 */
export function clear() {
  badging.clear()
  favicon.clear()
  title.clear()
}
