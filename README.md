# Formatizer

## :rocket: Installation
To install `formatizer` :
  - With **Yarn**, `yarn add formatizer`
  - Or, with **NPM**, `npm install formatizer`


## :sunny: Synopsis
With this module, you can format your text more easily. For example, you can **bold**, _italic_ or ~~strike~~ an message, send a smiley, a Snippet Code or a Blockquote... Let's see API Reference for more details. :smile:


## :gear: Options
Formatizer just need **one** parameter : **message**. It's a string and **Formatizer** _will format it_.


## :eyes: Code Example
```js
/*
 * Package Import
 */
import Formatizer from 'formatizer';
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
    <Formatizer message={message} />
    // Output: In this example, test is formatted in bold
  </div>
)
```


## :pick: API Reference
- Message **bold** :   
```js
const message = '*message*';
<Formatizer message={message} />
// Output: message in BOLD
```

- Message _italic_ :   
```js
const message = '_message_';
<Formatizer message={message} />
// Output: message in ITALIC
```

- Message ~~strike~~ :   
```js
const message = '~message~';
<Formatizer message={message} />
// Output: message in STRIKE
```

- Smiley :sunglasses: | :star: | :heart:, or other... :
```js
const message = ':sunglasses: | :star: | :heart: ';
<Formatizer message={message} />
// Output: Smiley !
```

- Snippet Code :
```js
const message = '```js const a = "string"```';   
// You can use : 'apache', 'apacheconf', 'bash', 'sh', 'zsh', 'css', 'xml', 'html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'ini', 'json', 'javascript', 'js', 'jsx', 'less', 'markdown', 'md', 'mkdown', 'mkd', 'php', 'scss', 'sql', 'stylus', 'styl' or 'twig',
<Formatizer message={message} />
// Output: Code Snipper like here !
```

- `Code` :
```js
const message = '`const a = "string"`'
<Formatizer message={message} />
// Output: Code
```

- > Message Blockquote :   
```js
const message = '> Message';
<Formatizer message={message} />
// Output: message in Blockquote
```

- We can format links too.
```js
const message = 'https://github.com/o-clock/formatizer';
<Formatizer message={message} />
// Output: Link formatted
```


## :construction: Tests


## :busts_in_silhouette: Contributors
* [Maxime Vasse](https://github.com/webdif)
* [Alexandre Bourdeaud'hui](https://github.com/alexandrebourdeaudhui)


## License
