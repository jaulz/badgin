import * as badging from './badging'
import * as favicon from './favicon'
import * as title from './title'

export type Value = number | null | undefined

export interface Interface {
  set: (value: Value) => void
  clear: () => void
}

export type Method = 'Badging' | 'Favicon' | 'Title'

export interface Options {
  method: Method
  favicon: Partial<favicon.Options>
  title: Partial<title.Options>
}

/**
 * Sets badge
 */
export function set(value: Value, options: Partial<Options> = {}) {
  const method =
    options.method ||
    (badging.isAvailable()
      ? 'Badging'
      : favicon.isAvailable()
      ? 'Favicon'
      : 'Title')

  switch (method) {
    case 'Badging': {
      badging.set(value)
      return
    }

    case 'Favicon': {
      favicon.set(value, options.favicon)
      return
    }

    default: {
      title.set(value, options.title)
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
