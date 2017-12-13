# Formatizer

## :muscle: Peer dependencies
You need these packages to install **Formatizer**.
  * React
  * Glamor & Glamorous

If you don't have these, please install `yarn add react glamor glamorous`


## :rocket: Installation
To install `formatizer` :
  * With **Yarn**, `yarn add formatizer`
  * Or, with **NPM**, `npm install formatizer`


## :sunny: Synopsis
With this module, you can format your text more easily. For example, you can format into **bold**, _italic_ or ~~strike~~ a message, send a smiley, a code snippet or a blockquote... Let's see [API Reference](https://github.com/O-clock/formatizer#pick-api-reference) for more details. :smile:


## :gear: Options
`<Formatizer>` just need a `message` prop: _the string you want format._


## :eyes: Code Example
```js
/*
 * Package Import
 */
import { Formatizer } from 'formatizer';
// Other import...

/*
 * Code
 */
const message = '*test*';


/*
 * Component
 */
const App = () => (
  <div>
    <Formatizer>{message}</Formatizer>
    // Output: In this example, test is formatted in bold
  </div>
)
```


## :eyes: Example

You can also try this example in live :
  * Download it.
  * Install packages via `yarn` or `npm install`
  * Launch watcher via `yarn start` or `npm start`
  * Go http://localhost:3333/
  * Test it ! :tada:


## :pick: API Reference

* **bold** :   
```js
const message = '*message*';
<Formatizer>{message}</Formatizer>
// Output: message in BOLD
```

* _italic_ :   
```js
const message = '_message_';
<Formatizer>{message}</Formatizer>
// Output: message in ITALIC
```

* ~~strike~~ :   
```js
const message = '~message~';
<Formatizer>{message}</Formatizer>
// Output: message in STRIKE
```

* Snippet Code :
```js
const message = '```js const a = "string"```';   
// You can use : 'apache', 'apacheconf', 'bash', 'sh', 'zsh', 'css', 'xml', 'html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'ini', 'json', 'javascript', 'js', 'jsx', 'less', 'markdown', 'md', 'mkdown', 'mkd', 'php', 'scss', 'sql', 'stylus', 'styl' or 'twig',
<Formatizer>{message}</Formatizer>
// Output: Code Snipper like here !
```

* `Code` :
```js
const message = '`const a = "string"`'
<Formatizer>{message}</Formatizer>
// Output: Code
```

* > Blockquote :   
```js
const message = '> Message';
<Formatizer>{message}</Formatizer>
// Output: message in Blockquote
```

* We can format links too.
```js
const message = 'https://github.com/o-clock/formatizer';
<Formatizer>{message}</Formatizer>
// Output: Link formatted
```

* Emoji with colons (eg. :sunglasses:, :star:, :heart:, or other...) or with Smiley :-P :
```js
const message = ':star:';
<Formatizer>{message}</Formatizer>
// Output: An Emoji ⭐️ !
```

* Picker :sunglasses:, or other... :
```js
import { Picker } from 'formatizer';
// onChange = return data @ emoji
<Picker onChange={(data) => console.log(data)} />
```

* If you want use the Sprite SVG in `/assets/` folder for Emoji / Picker
  + you need to download it, [here](https://github.com/emojione/emojione/blob/2.2.7/assets/sprites/emojione.sprites.svg).
  + In your code, `Import { Emojione } from 'formatizer`'
  + Add your assets folder, `Emojione.imagePathSVGSprites = '/images/common/emojione.svg';`


## :construction: Tests
You can run tests with:

  * `yarn test`: Execute all tests, one time.

  * `yarn test:one  $1`: Execute one test,
    * For example, if we're doing `yarn test:one tests/components/Machin.test.js`
    * $1 is `tests/components/Format.test.js`


## :busts_in_silhouette: Contributors
* [Maxime Vasse](https://github.com/webdif)
* [Alexandre Bourdeaud'hui](https://github.com/alexandrebourdeaudhui)


## Want to contribute ?
 * All contributions are welcome !
  * Download it.
  * Please install dependencies.
  * Run `yarn start`
  * Let's go http://localhost:3333/
  * Let's go edit `src` folder
  * Have fun


This project has a little [Husky](https://github.com/typicode/husky) :dog:.


## License

MIT License.
