# Changelog

**Ne pas oublier de changer le package.json**

## 1.5.0 / 07-04-2020

### 📰 News

- [#42](https://github.com/O-clock-Dev/formatizer/issues/42) : Now we can add a link like on markdown: `[label](link)`. We have the choice between the 2 methods. If we add a link like the markdown system, the label is now displayed, when the URL is only in the href property

## 1.4.0 / 06-04-2020

### 🎉 Enhancements

- Update React to the latest version
- Title attribute for emojis
- [#22](https://github.com/O-clock-Dev/formatizer/issues/22) : Remove CSS-in-JS' library and use CSS inline instead.

## 1.3.4 / 17-03-2020

### 🐛 Fixes

- [#38](https://github.com/O-clock-Dev/formatizer/issues/38) : Fix issues with `Emoji`

## 1.3.3 / 28-11-2019

### 🎉 Enhancements

- Update size @ Emoji (16 -> 20)

## 1.3.2 / 27-11-2019

### 🎉 Enhancements

- Update regex for Emoji and Smiley

## 1.3.1 / 26-11-2019

### 🎉 Enhancements

- Update regex for Emoji and Smiley

## 1.3.0 / 22-11-2019

### 💥 Breaking Changes

- Remove `Emojione`
- Remove `Emojione-picker`
- Add `Emoji-mart`

## 1.2.6 / 16-07-2018

### 🎉 Enhancements

- Improvement regex `Mention`
- Increased arrow spoiler margin

### 🐛 Fixes

- [#15](https://github.com/O-clock-Dev/formatizer/issues/15) : Fix issues with `Mention` (Special char)

## 1.2.5

### 🐛 Fixes

- Fix issues with scroll in `Spoiler` in the Cockpit.

## 1.2.4

### 🐛 Fixes

- [#14](https://github.com/O-clock-Dev/formatizer/issues/14) : Fix `Mention` with dot
- [#9](https://github.com/O-clock-Dev/formatizer/issues/9) : Fix `Mention` with apostrophe
- Fix `Mention` with 2 accents
- [#10](https://github.com/O-clock-Dev/formatizer/issues/10) : Fix `Link` with comma in second party of URL (path, etc...)

### 🎉 Enhancements

- [#11](https://github.com/O-clock-Dev/formatizer/issues/11) : Add support for `atom://teletype/...`
- [#13](https://github.com/O-clock-Dev/formatizer/issues/13) : Add an option for open Spoiler automatically, and prepare for future options :)

## 1.2.3

### 🎉 Enhancements

- [#8](https://github.com/O-clock-Dev/formatizer/issues/8) : Add piece `Spoiler`

## 1.2.2

### 🎉 Enhancements

- [#6](https://github.com/O-clock-Dev/formatizer/issues/6) : Update Regex of `Mention` with accents

## 1.2.1

### 🎉 Enhancements

- Update style of `Color`

## 1.2.0

### 💥 Breaking Changes

- Add full support for `Mention`. If an user is not mentionable, his mention is not going in `Mention`you can see a complete example in `example` folder.

### 🎉 Enhancements

- When a HEX color is pass like param in `Formatizer`, we're displaying a little square with this color.

## 1.1.9

### 🎉 Enhancements

- Add comma in Regex @ `Link`
- add `textTransform: "none"` in `CodingFront`

## 1.1.8

- Change style for `Link`, `- textDecorationSkip: 'ink'` => `+ textUnderlinePosition: 'under'`
- Display lineNumbers in `Highlight` only if we have more than 1 line

## 1.1.7

- Move picker.css in folder example
- Create `Formatizer/index.js`
- Update style Highlight
  - `- margin: '.2em .15em',`
  - `+ margin: '.2em -.2em .2em 0'`

## 1.1.6

- Update `Highlight`
  - Update style with `opacity: .5` and `textAlign: right` for `lineNumbers`.
  - Update Regex.
  - Delete `.trim()`
  - Condition if code in the `Highlight` start with space.
  - More tests

## 1.1.5

- Update Regex of `Code`

  - Delete line break at the End of `Code`

- Add `Menlo` font in `Example` folder
- Update style of `Highlighter Code`
  - Fix `font-family: inherit` for `<code>{...}</code>`
  - Add lineNumbers

## 1.1.3

- Update style of `Code` (fontSize: '0.825em')

## 1.1.2

- Add export `Emojione`.

## 1.1.1

- Leave `Emojione` default values at startup.

## 1.1.0

- It's now easier to change image, without having to mess with Emojione.
  - `Emojione` is gone from exports.
  - `setImagePath` allow to change svg sprite file.
