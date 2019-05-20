import merge from 'lodash.merge';

const warn = () => {
    console.warn('Badging API is not enabled. Please check here how you can enable it: https://developers.google.com/web/updates/2018/12/badging-api#use');
};
function isAvailable() {
    return 'ExperimentalBadge' in window;
}
function set(value) {
    if (!isAvailable()) {
        warn();
        return;
    }
    window.ExperimentalBadge.set(value);
}
function clear() {
    if (!isAvailable()) {
        warn();
        return;
    }
    window.ExperimentalBadge.clear();
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function isEmpty(value) {
    return !value || !Number.parseInt(value) || value < 0;
}

// Store previous value
let previousValue = 0;
// Get the current favicon of the document
const getFavicon = () => {
    const links = document.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (link.hasAttribute('href') &&
            (link.getAttribute('rel') || '').match(/\bicon\b/)) {
            return link;
        }
    }
    return undefined;
};
// Calculate the size of the font and canvas element based on device's ratio
const ratio = Math.ceil(window.devicePixelRatio) || 1;
const size = 16 * ratio;
// References to the various of favicons that we need to track to reset and update the counters
const original = getFavicon();
const image = document.createElement('img');
// Setup the source canvas element which we use to generate the favicon's data-url's from
const canvas = document.createElement('canvas');
canvas.width = size;
canvas.height = size;
const context = canvas.getContext ? canvas.getContext('2d') : null;
// Options
const defaultOptions = {
    fontSize: 10 * ratio,
    fontFamily: 'Arial',
    background: '#F03D25',
    color: '#ffffff',
    height: 9,
    width: 7,
    opacity: 1,
};
// Update the favicon
const setFavicon = (url) => {
    if (!url) {
        return;
    }
    // Remove the old favicon tags
    let tag = getFavicon();
    while (tag && tag.parentNode) {
        tag.parentNode.removeChild(tag);
        tag = getFavicon();
    }
    // Create new favicon
    const link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
};
// Draw the favicon
const drawFavicon = (value, options) => {
    image.onload = () => {
        // Draw image in canvas
        context.clearRect(0, 0, size, size);
        context.drawImage(image, 0, 0, image.width, image.height, 0, 0, size, size);
        // Draw bubble over the top
        if (String(value).length > 0) {
            drawBubble(context, value, options);
        }
        // Refresh tag in page
        setFavicon(canvas.toDataURL());
    };
    // Reload image
    if (original) {
        // Allow cross origin resource requests if the image is not a data:uri
        if (!original.href.match(/^data/)) {
            image.crossOrigin = 'anonymous';
        }
        image.src = original.href;
    }
};
// Draws the bubble on the canvas
const drawBubble = (context, value, options) => {
    const length = String(value).length - 1;
    const width = options.width * ratio + 6 * ratio * length;
    const height = options.height * ratio;
    const top = size - height;
    const left = size - width - ratio;
    const bottom = 16 * ratio;
    const right = 16 * ratio;
    const radius = 2 * ratio;
    context.save();
    context.globalAlpha = options.opacity;
    context.font = `${options.fontSize}px ${options.fontFamily}`;
    context.fillStyle = options.background;
    context.strokeStyle = options.background;
    context.lineWidth = ratio;
    // Bubble
    context.beginPath();
    context.moveTo(left + radius, top);
    context.quadraticCurveTo(left, top, left, top + radius);
    context.lineTo(left, bottom - radius);
    context.quadraticCurveTo(left, bottom, left + radius, bottom);
    context.lineTo(right - radius, bottom);
    context.quadraticCurveTo(right, bottom, right, bottom - radius);
    context.lineTo(right, top + radius);
    context.quadraticCurveTo(right, top, right - radius, top);
    context.closePath();
    context.fill();
    // Value
    context.fillStyle = options.color;
    context.textAlign = 'right';
    context.textBaseline = 'top';
    context.fillText(String(value), ratio === 2 ? 29 : 15, 7 * ratio);
    context.restore();
};
// Animate the drawing
const animateFavicon = (value, options) => __awaiter(undefined, void 0, void 0, function* () {
    const shouldAnimate = () => !document.hidden;
    if (!shouldAnimate()) {
        drawFavicon(value, options);
        return;
    }
    // Fade animation
    const frames = [
        {
            opacity: 0.0,
        },
        {
            opacity: 0.1,
        },
        {
            opacity: 0.2,
        },
        {
            opacity: 0.3,
        },
        {
            opacity: 0.4,
        },
        {
            opacity: 0.5,
        },
        {
            opacity: 0.6,
        },
        {
            opacity: 0.7,
        },
        {
            opacity: 0.8,
        },
        {
            opacity: 0.9,
        },
        {
            opacity: 1.0,
        },
    ];
    try {
        // Fade out previous value
        if (previousValue) {
            // Remember previous value
            const localPreviousValue = previousValue;
            previousValue = value;
            yield [...frames].reverse().reduce((cumulatedAnimation, frame) => __awaiter(this, void 0, void 0, function* () {
                yield cumulatedAnimation;
                // Stop immediately if tab is not active anymore
                if (!shouldAnimate()) {
                    throw new Error();
                }
                return new Promise(resolve => {
                    drawFavicon(localPreviousValue, Object.assign({}, options, frame));
                    setTimeout(() => resolve(), 50);
                });
            }), Promise.resolve({}));
        }
        // Fade in new value
        if (value) {
            yield frames.reduce((cumulatedAnimation, frame) => __awaiter(this, void 0, void 0, function* () {
                yield cumulatedAnimation;
                // Stop immediately if tab is not active anymore
                if (!shouldAnimate()) {
                    throw new Error();
                }
                return new Promise(resolve => {
                    drawFavicon(value, Object.assign({}, options, frame));
                    setTimeout(() => resolve(), 50);
                });
            }), Promise.resolve({}));
        }
    }
    catch (error) {
        // Draw immediately if any error occurs
        if (!isEmpty(value)) {
            drawFavicon(value, options);
        }
        else {
            setFavicon(original.href);
        }
    }
});
function isAvailable$1() {
    return !!context && !!original;
}
function set$1(value, options) {
    animateFavicon(value, options);
}
function clear$1(options) {
    animateFavicon(0, options);
}

const original$1 = document.title;
function set$2(value) {
    document.title = `(${value}) ${original$1}`;
}
function clear$2() {
    document.title = original$1;
}

const defaultOptions$1 = {
    method: isAvailable()
        ? 'Badging'
        : isAvailable$1()
            ? 'Favicon'
            : 'Title',
    favicon: defaultOptions,
};
/**
 * Sets badge
 */
function set$3(value, options = defaultOptions$1) {
    const mergedOptions = merge({}, defaultOptions$1, options);
    if (isEmpty(value)) {
        clear$3(mergedOptions);
        return;
    }
    switch (mergedOptions.method) {
        case 'Badging': {
            set(value);
            return;
        }
        case 'Favicon': {
            set$1(value, mergedOptions.favicon);
            return;
        }
        default: {
            set$2(value);
        }
    }
}
/**
 * Clears badge
 */
function clear$3(options = defaultOptions$1) {
    const mergedOptions = merge({}, defaultOptions$1, options);
    switch (mergedOptions.method) {
        case 'Badging': {
            clear();
            return;
        }
        case 'Favicon': {
            clear$1(mergedOptions.favicon);
            return;
        }
        default: {
            clear$2();
        }
    }
}

export { clear$3 as clear, set$3 as set };
