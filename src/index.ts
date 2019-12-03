import * as badging from './badging'
import * as favicon from './favicon'
import * as title from './title'

export type Value = number | undefined

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
  switch (options.method) {
    case undefined:
    case 'Badging': {
      if (badging.set(value)) {
        // Break only if method is explicitly requested
        if (options.method === 'Badging') {
          break
        }
      }
    }

    case 'Favicon': {
      if (favicon.set(value, options.favicon)) {
        break
      }
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
