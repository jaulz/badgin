import deepMerge from './deepMerge'
import { Value } from './index'
import isPositiveNumber from './isPositiveNumber'

export type Options = {
  backgroundColor: string
  color: string
  indicator: string
  radius: number
  size: number
  horizontalMargin: number
  verticalMargin: number
  horizontalPadding: number
  verticalPadding: number
}

type Favicon = HTMLLinkElement

type BestFavicon = Favicon | null

export const DefaultValue: Value = 0

export const DefaultOptions: Options = {
  backgroundColor: '#424242',
  color: '#ffffff',
  indicator: '!',
  radius: 3,
  size: 7,
  horizontalMargin: 0,
  verticalMargin: 0,
  horizontalPadding: 1,
  verticalPadding: 1,
}

const isFirefox = navigator.userAgent.indexOf('Firefox') > -1

// Get all favicons of the page
const getFavicons = (): Favicon[] => {
  const links = document.head.getElementsByTagName('link')
  const favicons: Favicon[] = []

  for (let i = 0; i < links.length; i++) {
    const link = links[i]
    const href = link.getAttribute('href')
    const rel = link.getAttribute('rel')

    if (!href) {
      continue
    }

    if (!rel) {
      continue
    }

    if (rel.split(' ').indexOf('icon') === -1) {
      continue
    }

    favicons.push(link)
  }

  return favicons
}

// Get the favicon with the best quality of the document
const getBestFavicon = (): BestFavicon => {
  const favicons = getFavicons()
  let bestFavicon: BestFavicon = null
  let bestSize = 0

  for (let i = 0; i < favicons.length; i++) {
    const favicon = favicons[i]
    const href = favicon.getAttribute('href')
    const sizes = favicon.getAttribute('sizes')

    // If the href looks like it's an SVG, it's the best we can get
    if (href?.endsWith('.svg')) {
      return favicon
    }

    // If the link does not have a "sizes" attribute, we use it only if we haven't found anything else yet
    if (!sizes) {
      if (!bestFavicon) {
        bestFavicon = favicon
        bestSize = 0
      }

      continue
    }

    // If we find an icon with sizes "any", it's the best we can get
    if (sizes === 'any') {
      return favicon
    }

    // Otherwise we will try to find the maximum size
    const size = parseInt(sizes.split('x')[0], 10)
    if (Number.isNaN(size)) {
      if (!bestFavicon) {
        bestFavicon = favicon
        bestSize = 0
      }

      continue
    }

    if (size > bestSize) {
      bestFavicon = favicon
      bestSize = size
      continue
    }
  }

  return bestFavicon
}

// References to the favicons that we need to track in order to reset and update the counters
const current: {
  favicons: Favicon[] | null
  bestFavicon: BestFavicon
  bestFaviconImage: HTMLImageElement | null
  value: Value
  options: Options
} = {
  favicons: null,
  bestFavicon: null,
  bestFaviconImage: null,
  value: DefaultValue,
  options: DefaultOptions,
}

// Get size depending on screen density
const devicePixelRatioListener = window.matchMedia(
  'screen and (min-resolution: 2dppx)'
)
const getRatio = () => {
  return Math.ceil(window.devicePixelRatio) || 1
}
const handleRatioChange = () => {
  set(current.value, current.options)
}
const getIconSize = () => {
  return 16 * getRatio()
}

// Update favicon
const setFavicon = (url: string) => {
  if (!url) {
    return
  }

  // Remove previous favicons
  for (const favicon of getFavicons()) {
    if (favicon.parentNode) {
      favicon.parentNode.removeChild(favicon)
    }
  }

  // Create new favicon
  const newFavicon = document.createElement('link')
  newFavicon.id = 'badgin'
  newFavicon.type = 'image/x-icon'
  newFavicon.rel = 'icon favicon'
  newFavicon.href = url

  document.getElementsByTagName('head')[0].appendChild(newFavicon)
}

// Draw the favicon
const drawFavicon = (
  image: HTMLImageElement,
  value: Value,
  options: Options
) => {
  const iconSize = getIconSize()
  const canvas = document.createElement('canvas')
  canvas.width = iconSize
  canvas.height = iconSize
  const context = canvas.getContext('2d')
  if (!context) {
    return
  }

  // Draw new image
  image.width = iconSize
  image.height = iconSize
  context.drawImage(image, 0, 0, image.width, image.height)

  // Draw bubble on the top
  drawBubble(context, value, options)

  // Refresh tag in page
  setFavicon(canvas.toDataURL())
}

// Draws the bubble on the canvas
const drawBubble = (
  context: CanvasRenderingContext2D,
  value: Value,
  options: Options
) => {
  const ratio = getRatio()
  const iconSize = getIconSize()

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

  // Calculate text width initially
  const textHeight = options.size - 2
  const font = `${options.size * ratio}px Arial`
  context.font = font
  const { width: textWidth } = context.measureText(finalValue)
  context.restore()

  // Calculate position etc.
  const width = textWidth + 2 * options.horizontalPadding
  const height = textHeight * ratio + 2 * options.verticalPadding
  const top = iconSize - height - options.verticalMargin
  const left = iconSize - width - options.horizontalMargin
  const bottom = 16 * ratio - options.verticalMargin
  const right = 16 * ratio - options.horizontalMargin
  const radius = options.radius

  // Bubble
  context.globalAlpha = 1
  context.fillStyle = options.backgroundColor
  context.strokeStyle = options.backgroundColor
  context.lineWidth = 0
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
  context.save()

  // Value
  context.font = font
  context.fillStyle = options.color
  context.textAlign = 'center'
  context.textBaseline = 'hanging'
  context.fillText(
    finalValue,
    left + width / 2,
    top + options.verticalPadding + (isFirefox ? 1 : 0)
  )
  context.save()

  /*
  // Helper line
  context.restore()
  context.strokeStyle = '#ff0000'
  context.moveTo(0, top + height / 2)
  context.lineTo(iconSize, top + height / 2)
  context.stroke()
  context.save()
  */
}

export function isAvailable() {
  return !!getBestFavicon()
}

export function set(value: Value, options?: Partial<Options>) {
  // Remember options
  current.value = value
  deepMerge(current.options, options || {})

  if (!isAvailable()) {
    return false
  }

  // Remember favicons
  if (!current.bestFavicon) {
    const bestFavicon = getBestFavicon()

    if (bestFavicon) {
      const bestFaviconImage = document.createElement('img')

      // Allow cross origin resource requests if the image is not a data:uri
      if (!bestFavicon.href.match(/^data/)) {
        bestFaviconImage.crossOrigin = 'anonymous'
      }

      // Load image
      bestFaviconImage.src = bestFavicon.href

      // Store for next time
      current.bestFavicon = bestFavicon
      current.bestFaviconImage = bestFaviconImage
    }

    // Once the device pixel ratio changes we set the value again
    devicePixelRatioListener.addEventListener('change', handleRatioChange)
  }
  if (!current.favicons) {
    current.favicons = getFavicons()
  }

  // The image is required for setting the badge
  if (!current.bestFaviconImage) {
    return false
  }

  // If we have the image, we can draw immediately
  if (current.bestFaviconImage.complete) {
    drawFavicon(current.bestFaviconImage, current.value, current.options)
    return true
  }

  // Otherwise we will wait for the load event
  current.bestFaviconImage.addEventListener('load', function () {
    drawFavicon(this, current.value, current.options)
  })

  return true
}

export function clear() {
  if (!isAvailable()) {
    return
  }

  // Reset value and options
  current.value = DefaultValue
  current.options = DefaultOptions

  // Remove old listener
  devicePixelRatioListener.removeEventListener('change', handleRatioChange)

  if (current.favicons) {
    // Remove current favicons
    for (const favicon of getFavicons()) {
      if (favicon.parentNode) {
        favicon.parentNode.removeChild(favicon)
      }
    }

    // Recreate old favicons
    for (const favicon of current.favicons) {
      document.head.appendChild(favicon)
    }
    current.favicons = null
    current.bestFavicon = null
    current.bestFaviconImage = null
  }
}
