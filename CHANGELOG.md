# Changelog

**Ne pas oublier de changer le package.json**

## 1.2.6 / 16-07-2018

### :tada: Enhancements

* Improvement regex `Mention`
* Increased arrow spoiler margin

### :bug: Fixes

* [#15](https://github.com/O-clock-Dev/formatizer/issues/15) : Fix issues with `Mention` (Special char)

## 1.2.5

### :bug: Fixes

* Fix issues with scroll in `Spoiler` in the Cockpit.

## 1.2.4

### :bug: Fixes

* [#14](https://github.com/O-clock-Dev/formatizer/issues/14) : Fix `Mention` with dot
* [#9](https://github.com/O-clock-Dev/formatizer/issues/9) : Fix `Mention` with apostrophe
* Fix `Mention` with 2 accents
* [#10](https://github.com/O-clock-Dev/formatizer/issues/10) : Fix `Link` with comma in second party of URL (path, etc...)

### :tada: Enhancements

* [#11](https://github.com/O-clock-Dev/formatizer/issues/11) : Add support for `atom://teletype/...`
* [#13](https://github.com/O-clock-Dev/formatizer/issues/13) : Add an option for open Spoiler automatically, and prepare for future options :)

## 1.2.3

### :tada: Enhancements

* [#8](https://github.com/O-clock-Dev/formatizer/issues/8) : Add piece `Spoiler`

## 1.2.2

### :tada: Enhancements

* [#6](https://github.com/O-clock-Dev/formatizer/issues/6) : Update Regex of `Mention` with accents

## 1.2.1

### :tada: Enhancements

* Update style of `Color`

## 1.2.0

### :boom: Breaking Changes

* Add full support for `Mention`. If an user is not mentionable, his mention is not going in `Mention`you can see a complete example in `example` folder.

### :tada: Enhancements

* When a HEX color is pass like param in `Formatizer`, we're displaying a little square with this color.

## 1.1.9

### :tada: Enhancements

* Add comma in Regex @ `Link`
* add `textTransform: "none"` in `CodingFront`

## 1.1.8

* Change style for `Link`, `- textDecorationSkip: 'ink'` => `+ textUnderlinePosition: 'under'`
* Display lineNumbers in `Highlight` only if we have more than 1 line

## 1.1.7

* Move picker.css in folder example
* Create `Formatizer/index.js`
* Update style Highlight
  * `- margin: '.2em .15em',`
  * `+ margin: '.2em -.2em .2em 0'`

## 1.1.6

* Update `Highlight`
  * Update style with `opacity: .5` and `textAlign: right` for `lineNumbers`.
  * Update Regex.
  * Delete `.trim()`
  * Condition if code in the `Highlight` start with space.
  * More tests

## 1.1.5

* Update Regex of `Code`

  * Delete line break at the End of `Code`

* Add `Menlo` font in `Example` folder
* Update style of `Highlighter Code`
  * Fix `font-family: inherit` for `<code>{...}</code>`
  * Add lineNumbers

## 1.1.3

* Update style of `Code` (fontSize: '0.825em')

## 1.1.2

* Add export `Emojione`.

## 1.1.1

* Leave `Emojione` default values at startup.

## 1.1.0

* It's now easier to change image, without having to mess with Emojione.
  * `Emojione` is gone from exports.
  * `setImagePath` allow to change svg sprite file.
