# Formatizer

## :muscle: Peer dependencies

You need these packages to install **Formatizer**.

- React

## :rocket: Installation

To install `formatizer` :

- With **Yarn**, `yarn add formatizer`
- Or, with **NPM**, `npm install formatizer`

## :sunny: Synopsis

With this module, you can format your text more easily. For example, you can format into **bold**, _italic_ or ~~strike~~ a message, send a smiley, a code snippet or a blockquote... Let's see [API Reference](readme.md#api-reference) for more details. :smile:

## :gear: Options

`<Formatizer>` just need a children `message` : _the string you want format._

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
);
```

## :eyes: Example

You can also try this example in live :

- Download this repository.
- Install packages via `yarn` or `npm install`
- Launch watcher via `yarn start` or `npm start`
- Go http://localhost:3333/
- Test it ! :tada:

## API Reference

- **bold** :

```js
const message = '*message*';
<Formatizer>{message}</Formatizer>;
// Output: message in BOLD
```

- _italic_ :

```js
const message = '_message_';
<Formatizer>{message}</Formatizer>;
// Output: message in ITALIC
```

- ~~strike~~ :

```js
const message = '~message~';
<Formatizer>{message}</Formatizer>;
// Output: message in STRIKE
```

- Color #ee1225 :

```js
const message = '#ee1225 or #000';
<Formatizer>{message}</Formatizer>;
// Output: colors red and black
```

- <details>
  <summary>Spoiler</summary>
  </details>

```js
const message = '### Hello ###';
<Formatizer>{message}</Formatizer>;
// Output: A message in spoiler
```

- Snippet Code :

````js
const message = '```js const a = "string"```';
// You can use : 'apache', 'apacheconf', 'bash', 'sh', 'zsh', 'css', 'xml', 'html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'ini', 'json', 'javascript', 'js', 'jsx', 'less', 'markdown', 'md', 'mkdown', 'mkd', 'php', 'scss', 'sql', 'stylus', 'styl' or 'twig',
<Formatizer>{message}</Formatizer>;
// Output: Code Snipper like here !
````

- `Code` :

```js
const message = '`const a = "string"`'
<Formatizer>{message}</Formatizer>
// Output: Code
```

- > Blockquote :

```js
const message = '> Message';
<Formatizer>{message}</Formatizer>;
// Output: message in Blockquote
```

- We can format links too.

```js
const message = 'https://github.com/o-clock/formatizer';
<Formatizer>{message}</Formatizer>;
// Output: https://github.com/o-clock/formatizer
```

```js
const message = '[Formatizer](https://github.com/o-clock/formatizer)';
<Formatizer>{message}</Formatizer>;
// Output: Formatizer (https://github.com/o-clock/formatizer in the href property)
```

- Emoji with colons (eg. :sunglasses:, :star:, :heart:, or other...) or with Smiley :-P :

```js
const message = ':star:';
<Formatizer>{message}</Formatizer>;
// Output: An Emoji ⭐️ !
```

- Picker :sunglasses: :

```js
import { Picker } from 'formatizer';
// onChange = return data @ emoji
<Picker onChange={data => console.log(data)} />;
```

### Tips :bulb:

1. If you're using `Picker`, you need add the css file `picker.css`. You can find this file in folder `example/assets`

2. For a better experience when you use `Snippet Code` and `Code`, please install and use font `Menlo`... You can look at the `example` folder if you want an example.

## :construction: Tests

You can run tests with:

- `yarn test`: Execute all tests, one time.

- `yarn test:one`: Execute one test,
  - Example :arrow_forward: `yarn test:one tests/components/Machin.test.js`

## :busts_in_silhouette: Contributors

- [Maxime Vasse](https://github.com/webdif)
- [Alexandre Bourdeaud'hui](https://github.com/alexandrebourdeaudhui)

## Want to contribute ?

- All contributions are welcome !
- Download this repository.
- Install dependencies.
- Run `yarn start`
- Let's go http://localhost:3333/
- Let's go edit `src` folder

This project has adopted a small [Husky](https://github.com/typicode/husky) :dog:.

## License

MIT License.
