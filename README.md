# badgin

badgin allows to set an badge to the webpage in the following order:
- via (Badging API)[https://developers.google.com/web/updates/2018/12/badging-api]
- via Favicon
- via title

## Installation

The module can be installed by running:

```
yarn add --save badgin
```

## Usage

Just use the library as following:

```js
import badgin from 'badgin'

badgin.set(1)
badgin.clear()
```

Starting in Chrome 73, the Badging API is available as an origin trial for Windows (7+) and macOS. 
If you want to know how origin trials work, please check (Google's documentation)[https://developers.google.com/web/updates/2018/12/badging-api#use].

### Options

The following options can be used:

* method: 'Badging' | 'Favicon' | 'Title'
* favicon:
  * width: the width of the bubble
  * height: the height of the bubble
  * fontFamily: the font family
  * fontSize: the font size
  * color: the font color
  * background: the bubble's background color

And you can use it like this:
```js
badgin.set(1, {
  favicon: {
    width: 9,
    background: '#549A2F',
  },
})
```

## Browser Support

`badgin` works in all modern browsers.

## License / Credits

MIT

This is a refactored fork of the original Tinycon library, Tinycon is released under the MIT license. Tinycon was inspired by [Notificon](https://github.com/makeable/Notificon).
