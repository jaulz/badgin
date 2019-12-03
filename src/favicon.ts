import deepMerge from './deepMerge'
import { Value } from './index'
import isPositiveNumber from './isPositiveNumber'

export type Options = {
  backgroundColor: string
  color: string
  indicator: string
}

type Favicon = HTMLLinkElement | null

// Get the current favicon of the document
const getFavicon = (): Favicon => {
  const links = document.getElementsByTagName('link')

  for (let i = 0; i < links.length; i++) {
    const link = links[i]
    if (
      link.hasAttribute('href') &&
      (link.getAttribute('rel') || '').match(/\bicon\b/)
    ) {
      return link
    }
  }

  return null
}

// Calculate the size of the font and canvas element based on device's ratio
const ratio = Math.ceil(window.devicePixelRatio) || 1
const size = 16 * ratio

// Options
export const defaultOptions: Options = {
  backgroundColor: '#424242',
  color: '#ffffff',
  indicator: '!',
}

// References to the favicons that we need to track in order to reset and update the counters
const current: { favicon: Favicon; value: Value; options: Options } = {
  favicon: null,
  value: 0,
  options: defaultOptions,
}
let original: Favicon = null
let image: HTMLImageElement | null = null

// Setup the source canvas element which we use to generate the favicon's data-url's from
let canvas: HTMLCanvasElement | null = null
let context: CanvasRenderingContext2D | null = null

// Initialize
const initialize = () => {
  if (current.favicon) {
    return
  }

  current.favicon = getFavicon()
  image = document.createElement('img')
  canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  context = canvas.getContext ? canvas.getContext('2d') : null
}

// Update the favicon
const setFavicon = (url: string) => {
  if (!url) {
    return
  }

  // Remove the old favicon tags
  let tag = getFavicon()
  while (tag && tag.parentNode) {
    tag.parentNode.removeChild(tag)
    tag = getFavicon()
  }

  // Create new favicon
  const link = document.createElement('link')
  link.type = 'image/x-icon'
  link.rel = 'icon'
  link.href = url

  document.getElementsByTagName('head')[0].appendChild(link)
}

// Draw the favicon
const drawFavicon = (value: Value, options: Options) => {
  if (!image) {
    return
  }

  image.onload = () => {
    if (!image || !canvas) {
      return
    }

    // Draw image in canvas
    context!.clearRect(0, 0, size, size)
    context!.drawImage(image, 0, 0, image.width, image.height, 0, 0, size, size)

    // Draw bubble over the top
    drawBubble(context!, value, options)

    // Refresh tag in page
    setFavicon(canvas.toDataURL())
  }

  // Reload image
  if (original) {
    // Allow cross origin resource requests if the image is not a data:uri
    if (!original.href.match(/^data/)) {
      image.crossOrigin = 'anonymous'
    }

    image.src = original.href
  }
}

// Draws the bubble on the canvas
const drawBubble = (
  context: CanvasRenderingContext2D,
  value: Value,
  options: Options
) => {
  // Do we need to render the bubble at all?
  let finalValue: string = ''
  if (isPositiveNumber(value)) {
    if (value === 0) {
      finalValue = ''
    } else if (value < 100) {
      finalValue = String(value)
    } else {
      finalValue = '99+'
    }
  } else {
    finalValue = options.indicator
  }

  // Return early
  if (!finalValue) {
    return
  }

  // Calculate position etc.
  const length = finalValue.length - 1
  const width = 8 * ratio + 4 * ratio * length
  const height = 7 * ratio
  const top = size - height
  const left = size - width - ratio
  const bottom = 16 * ratio
  const right = 16 * ratio
  const radius = 5 * ratio

  // Bubble
  context.save()
  context.globalAlpha = 1
  context.fillStyle = options.backgroundColor
  context.strokeStyle = options.backgroundColor
  context.lineWidth = ratio
  context.beginPath()
  context.moveTo(left + radius, top)
  context.quadraticCurveTo(left, top, left, top + radius)
  context.lineTo(left, bottom - radius)
  context.quadraticCurveTo(left, bottom, left + radius, bottom)
  context.lineTo(right - radius, bottom)
  context.quadraticCurveTo(right, bottom, right, bottom - radius)
  context.lineTo(right, top + radius)
  context.quadraticCurveTo(right, top, right - radius, top)
  context.closePath()
  context.fill()
  context.restore()

  // Value
  context.save()
  context.font = `${7 * ratio}px Arial`
  context.fillStyle = options.color
  context.textAlign = 'center'
  context.textBaseline = 'top'
  context.fillText(finalValue, left + width / 2 + 1, 9 * ratio + 1)
  context.restore()
}

export function isAvailable() {
  if (!original) {
    original = getFavicon()
    image = document.createElement('img')
    canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    context = canvas.getContext ? canvas.getContext('2d') : null
  }

  return !!context && !!original
}

export function set(value: Value, options?: Partial<Options>) {
  // Remember options
  current.value = value
  deepMerge(current.options, options || {})

  if (!isAvailable()) {
    return false
  }

  // Draw icon
  drawFavicon(current.value, current.options)
  return true
}

export function clear() {
  if (!isAvailable()) {
    return
  }

  setFavicon(original!.href)
}
