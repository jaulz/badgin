import * as badging from './badging'
import * as favicon from './favicon'
import * as title from './title'

export type Value = number|null

export interface Interface {
  set: (value:Value) => void
  clear: () => void
}

export type Method = 'Badging' | 'Favicon' | 'Title'

export interface Options {
  method: Method
  favicon: favicon.Options
}

const defaultOptions:Options = {
  method: 'ExperimentalBadge' in window ? 'Badging' : 'Favicon',
  favicon: favicon.defaultOptions,
};

  /**
   * Sets badge
   */
  export function set (value:Value, options:Options = defaultOptions) {
    if (!value || !Number.parseInt(value as any) || value < 0) {
      clear()
      return
    }

    // Merge options
    const webOptions = {
        ...defaultOptions,
        ...options,
    }

    // Set badge
    switch (webOptions.method) {
      case 'Badging': {
        badging.set(value)
        return
      }

      case 'Favicon': {
        favicon.set(value, {
            ...defaultOptions.favicon,
            ...webOptions.favicon,
        })
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
  export function clear (options:Options = defaultOptions) {
    // Merge options
    const webOptions = {
      ...defaultOptions,
        ...options,
    }

    // Clear badge
    switch (webOptions.method) {
      case 'Badging': {
        badging.clear()
        return
      }

      case 'Favicon': {
        favicon.clear()
        return
      }

      default: {
        title.clear()
      }
    }
  }