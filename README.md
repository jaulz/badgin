# badgin

![](assets/screenshot.png)

The [Badging API](https://developers.google.com/web/updates/2018/12/badging-api) is a new web platform API that allows installed web apps to set an application-wide badge, shown in an operating-system-specific place associated with the application (such as the shelf or home screen). `badgin` allows to set an badge via Badging API and falls back to these alternatives:

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
If you want to know how origin trials work, please check [Google's documentation](https://developers.google.com/web/updates/2018/12/badging-api#use).

### Options

The following options can be used:

```js
{
  method: 'Badging' | 'Favicon' | 'Title'
  favicon: {
    fontSize: number,
    fontFamily: string,
    background: string,
    color: string,
    height: number,
    width: number,
  }
}
```

And you can use it like this:

```js
badgin.set(1, {
  favicon: {
    width: 9,
    background: '#549A2F',
  },
})
```

## License / Credits

MIT

This is a refactored fork of the original Tinycon library, Tinycon is released under the MIT license. Tinycon was inspired by [Notificon](https://github.com/makeable/Notificon).
