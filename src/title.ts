import merge from 'lodash.merge'
import { Value } from './index'
import isIndicator from './isIndicator'
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
  value: null,
  options: defaultOptions,
}

export function changeTitle(title: Title, value: Value, options: Options) {
  let newTitle = title

  if (isIndicator(value)) {
    newTitle = `(${options.indicator}) ${title}`
  } else if (isPositiveNumber(value)) {
    newTitle = `(${value}) ${title}`
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
        console.log('change')
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
}

export function clear() {
  current.value = null
  document.title = document.title
}
