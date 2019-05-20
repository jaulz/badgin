import { Value } from './index'

export type Options = {
  fontSize: number
  fontFamily: string
  background: string
  color: string
  height: number
  width: number
}

type Favicon = HTMLLinkElement | undefined

// Calculate the size of the font and canvas element based on device's ratio
var ratio = Math.ceil(window.devicePixelRatio) || 1,
  size = 16 * ratio

// References to the various of favicons that we need to track to reset and update the counters
let original: Favicon = undefined,
  current: Favicon = undefined,
  image: HTMLImageElement = document.createElement('img')

// Setup the source canvas element which we use to generate the favicon's data-url's from
const canvas = document.createElement('canvas')
canvas.width = size
canvas.height = size

// Options
export const defaultOptions: Options = {
  fontSize: 10 * ratio,
  fontFamily: 'Arial',
  background: '#F03D25',
  color: '#ffffff',
  height: 9,
  width: 7,
}

// A poor man's browser sniffer
const isBrowser = (id: string) => {
  return !!~navigator.userAgent.toLowerCase().indexOf(id)
}

// We unfortunately need to do some browser sniffing here as the difference in
// render engines are affecting the size of rendered text.
const isWebkit = isBrowser('chrome') || isBrowser('safari'),
  isMozilla = isBrowser('mozilla') && !isWebkit

// Get the current favicon of the document
const getFavicon = (): Favicon => {
  const links = document.getElementsByTagName('link')

  for (let i = 0; i < links.length; i++) {
    if ((links[i].getAttribute('rel') || '').match(/\bicon\b/)) {
      return links[i]
    }
  }

  return undefined
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
const drawFavicon = (label: Value, options: Options) => {
  if (!canvas.getContext) {
    return false
  }

  // Remember original favicon
  if (!original) {
    original = getFavicon()
  }

  const context = canvas.getContext('2d')
  image.onload = () => {
    if (!context) {
      return
    }

    // Draw image in canvas
    context.clearRect(0, 0, size, size)
    context.drawImage(image, 0, 0, image.width, image.height, 0, 0, size, size)

    // Draw bubble over the top
    if (String(label).length > 0) {
      drawBubble(context, label, options)
    }

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
function drawBubble(
  context: CanvasRenderingContext2D,
  value: Value,
  options: Options
) {
  const length = String(value).length - 1,
    width = options.width * ratio + 6 * ratio * length,
    height = options.height * ratio,
    top = size - height,
    left = size - width - ratio,
    bottom = 16 * ratio,
    right = 16 * ratio,
    radius = 2 * ratio

  // Webkit seems to render fonts lighter than FireFox
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

  // Label
  context.fillStyle = options.color
  context.textAlign = 'right'
  context.textBaseline = 'top'
  context.fillText(String(value), ratio === 2 ? 29 : 15, 7 * ratio)
}

export function set(value: Value, options: Options) {
  drawFavicon(value, options)
}

export function clear() {
  if (original) {
    setFavicon(original.href)
  }
}
