import merge from 'lodash.merge'
import { Value } from './index'
import isPositiveNumber from './isPositiveNumber'

export type Options = {
  indicator: string
}

type Title = string | null

export const defaultOptions: Options = {
  indicator: '!',
}

const current: { title: Title; value: Value; options: Options } = {
  title: null,
  value: 0,
  options: defaultOptions,
}

export function changeTitle(title: Title, value: Value, options: Options) {
  let newTitle = title

  if (isPositiveNumber(value)) {
    if (value === 0) {
      newTitle = title
    } else {
      newTitle = `(${value}) ${title}`
    }
  } else {
    newTitle = `(${options.indicator}) ${title}`
  }

  const element = document.querySelector('title')
  if (element) {
    element.childNodes[0].nodeValue = newTitle
  }
}

export function set(value: Value, options?: Partial<Options>) {
  if (current.title === null) {
    current.title = document.title

    // Watch changes of title
    Object.defineProperty(document, 'title', {
      get: () => {
        return current.title
      },
      set: title => {
        current.title = title
        changeTitle(current.title, current.value, current.options)
      },
    })
  }

  // Remember value and options
  current.value = value
  merge(current.options, options)

  // Trigger change
  document.title = document.title

  return true
}

export function clear() {
  current.value = 0

  // Trigger change
  document.title = document.title
}
