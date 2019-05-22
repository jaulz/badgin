import merge from 'lodash.merge'

let warnedBefore = false
const warn = () => {
  if (warnedBefore) {
    return
  }
  console.warn(
    'Application must run in standalone mode and Badging API must be enabled. Please check here how you can enable it: https://developers.google.com/web/updates/2018/12/badging-api#use'
  )
  warnedBefore = true
}
function isAvailable() {
  return (
    window.matchMedia('(display-mode: standalone)').matches &&
    'ExperimentalBadge' in window
  )
}
function set(value) {
  if (!isAvailable()) {
    warn()
    return
  }
  window.ExperimentalBadge.set(value)
}
function clear() {
  if (!isAvailable()) {
    warn()
    return
  }
  window.ExperimentalBadge.clear()
}

function isPositiveNumber(value) {
  return value && Number.isInteger(value) && value >= 0
}

function isIndicator(value) {
  return value === undefined || !Number.isInteger(value)
}

// Get the current favicon of the document
const getFavicon = () => {
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
// References to the various of favicons that we need to track to reset and update the counters
let original = null
let image = null
// Setup the source canvas element which we use to generate the favicon's data-url's from
let canvas = null
let context = null
// Initialize
let initialize = () => {
  original = getFavicon()
  image = document.createElement('img')
  canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  context = canvas.getContext ? canvas.getContext('2d') : null
  initialize = () => {}
}
// Options
const defaultOptions = {
  fontSize: 8 * ratio,
  fontFamily: 'Arial',
  background: '#424242',
  color: '#ffffff',
  height: 8,
  width: 7,
  opacity: 1,
}
// Update the favicon
const setFavicon = url => {
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
const drawFavicon = (value, options) => {
  if (!image) {
    return
  }
  image.onload = () => {
    if (!image || !canvas) {
      return
    }
    // Draw image in canvas
    context.clearRect(0, 0, size, size)
    context.drawImage(image, 0, 0, image.width, image.height, 0, 0, size, size)
    // Draw bubble over the top
    drawBubble(context, value, options)
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
const drawBubble = (context, value, options) => {
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
function isAvailable$1() {
  initialize()
  return !!context && !!original
}
function set$1(value, options) {
  drawFavicon(value, options)
}
function clear$1() {
  setFavicon(original.href)
}

let original$1 = ''
const defaultOptions$1 = {
  indicator: '!',
}
function set$2(value, options) {
  if (!original$1) {
    original$1 = document.title
  }
  if (isIndicator(value)) {
    document.title = `(${options.indicator}) ${original$1}`
    return
  }
  if (isPositiveNumber(value)) {
    document.title = `(${value}) ${original$1}`
    return
  }
  document.title = original$1
}
function clear$2() {
  document.title = original$1
}

const getDefaultOptions = () => {
  return {
    method: isAvailable() ? 'Badging' : isAvailable$1() ? 'Favicon' : 'Title',
    favicon: defaultOptions,
    title: defaultOptions$1,
  }
}
/**
 * Sets badge
 */
function set$3(value, options = getDefaultOptions()) {
  const mergedOptions = merge({}, getDefaultOptions(), options)
  switch (mergedOptions.method) {
    case 'Badging': {
      set(value)
      return
    }
    case 'Favicon': {
      set$1(value, mergedOptions.favicon)
      return
    }
    default: {
      set$2(value, mergedOptions.title)
    }
  }
}
/**
 * Clears badge
 */
function clear$3() {
  clear()
  clear$1()
  clear$2()
}

export { clear$3 as clear, set$3 as set }
