![](https://github.com/approvals-cloud/badgin/raw/master/assets/screenshots/standalone_osx.png)

The [Badging API](https://developers.google.com/web/updates/2018/12/badging-api) is a new web platform API that allows installed web apps to set an application-wide badge, shown in an operating-system-specific place associated with the application (such as the shelf or home screen). Starting in Chrome 73, the Badging API is available as an origin trial for Windows (7+) and macOS. If you want to know how origin trials work, please check [Google's documentation](https://developers.google.com/web/updates/2018/12/badging-api#use). Since this API is not available everywhere, `badgin` safely falls back to alternatives:

### via Favicon

![](https://github.com/approvals-cloud/badgin/raw/master/assets/screenshots/favicon.png)

### via Title

![](https://github.com/approvals-cloud/badgin/raw/master/assets/screenshots/title.png)

## Installation

The module can be installed by running:

```
yarn add --save /badgin
```

## Usage

Just use the library as following:

```js
import badgin from 'badgin'

badgin.set(1) // set value
badgin.set() // set indicator only
badgin.clear()
```

### Options

The following options can be used:

```js
{
  method: 'Badging' | 'Favicon' | 'Title'
  favicon: {
    backgroundColor: string
    color: string
    indicator: string
  }
  title: {
    indicator: string
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
