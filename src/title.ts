import merge from 'lodash.merge'
import { Value } from './index'
import isIndicator from './isIndicator'
import isPositiveNumber from './isPositiveNumber'

export const defaultOptions: Options = {
  indicator: '!',
}

const current = {
  title: null,
  value: null,
  options: defaultOptions,
}

export type Options = {
  indicator: string
}

export function changeTitle(title: string, value: Value, options: Options) {
  let newTitle = title

  if (isIndicator(value)) {
    newTitle = `(${options.indicator}) ${title}`
  } else if (isPositiveNumber(value)) {
    newTitle = `(${value}) ${title}`
  }

  document.querySelector('title').childNodes[0].nodeValue = newTitle
}

export function set(value: Value, options: Partial<Options>) {
  if (current.title === null) {
    current.title = document.title

    // Watch changes of title
    Object.defineProperty(document, 'title', {
      set: title => {
        current.title = title
        changeTitle(current.title, value, current.options)
      },
    })
  }

  // Remember options
  merge(current.options, options)

  // Trigger change
  document.title = document.title
}

export function clear() {
  current.value = null
  document.title = document.title
}
