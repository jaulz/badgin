import { Value } from './index'
import isPositiveNumber from './isPositiveNumber'
import isIndicator from './isIndicator'

export type Options = {
  fontSize: number
  fontFamily: string
  background: string
  color: string
  height: number
  width: number
  opacity: number
}

type Favicon = HTMLLinkElement | undefined

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

  return undefined
}

// Calculate the size of the font and canvas element based on device's ratio
const ratio = Math.ceil(window.devicePixelRatio) || 1
const size = 16 * ratio

// References to the various of favicons that we need to track to reset and update the counters
const original: Favicon = getFavicon()
const image: HTMLImageElement = document.createElement('img')

// Setup the source canvas element which we use to generate the favicon's data-url's from
const canvas = document.createElement('canvas')
canvas.width = size
canvas.height = size
const context = canvas.getContext ? canvas.getContext('2d') : null

// Options
export const defaultOptions: Options = {
  fontSize: 8 * ratio,
  fontFamily: 'Arial',
  background: '#F03D25',
  color: '#ffffff',
  height: 8,
  width: 7,
  opacity: 1,
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
  image.onload = () => {
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
  // Do we need to render the buble at all?
  const finalValue = isIndicator(value)
    ? ' '
    : isPositiveNumber(value)
    ? String(value)
    : null
  if (finalValue === null) {
    return
  }

  // Calculate position etc.
  const length = finalValue.length - 1
  const width = options.width * ratio + 4 * ratio * length
  const height = options.height * ratio
  const top = size - height
  const left = size - width - ratio
  const bottom = 16 * ratio
  const right = 16 * ratio
  const radius = 5 * ratio

  context.save()
  context.globalAlpha = options.opacity
  context.font = `${options.fontSize}px ${options.fontFamily}`
  context.fillStyle = options.background
  context.strokeStyle = options.background
  context.lineWidth = ratio

  // Bubble
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

  // Value
  context.fillStyle = options.color
  context.textAlign = 'right'
  context.textBaseline = 'top'
  context.fillText(finalValue, ratio === 2 ? 29 : 15, 9 * ratio)

  context.restore()
}

export function isAvailable() {
  return !!context && !!original
}

export function set(value: Value, options: Options) {
  drawFavicon(value, options)
}

export function clear() {
  setFavicon(original!.href)
}
