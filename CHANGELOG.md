# Changelog

**Ne pas oublier de changer le package.json**

## 1.1.8
Change style for `<Link />`, `-  textDecorationSkip: 'ink'` => `+  textUnderlinePosition: 'under'`
Display lineNumbers in `<Highlight />` only if we have more than 1 line

## 1.1.7
Move picker.css in folder example
Create `Formatizer/index.js`
Update style <Highlight />
  * `-  margin: '.2em .15em',`
  * `+  margin: '.2em -.2em .2em 0'`


## 1.1.6
Update <Highlight />
  - Update style with `opacity: .5` and `textAlign: right` for `lineNumbers`.
  - Update Regex.
  - Delete `.trim()`
  - Condition if code in the `<Highlight />` start with space.
  - More tests


## 1.1.5
Update Regex of `Code`
  - Delete line break at the End of `Code`

Add `Menlo` font in `Example` folder

Update style of `Highlighter Code`
  - Fix `font-family: inherit` for `<code>{...}</code>`
  - Add lineNumbers


## 1.1.4


## 1.1.3
Update style of `Code` (fontSize: '0.825em')


## 1.1.2
Add export `Emojione`.


## 1.1.1
Leave `Emojione` default values at startup.


## 1.1.0
It's now easier to change image, without having to mess with Emojione.
  - `Emojione` is gone from exports.
  - `setImagePath` allow to change svg sprite file.
