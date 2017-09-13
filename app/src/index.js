/*
 * Package Import
 */
import React from 'react';
import { render } from 'react-dom';


/*
 * Local Import
 */
import Message from './components/Message';


/*
 * Code
 */
const message = ':star: :nerd_face: Bonjour je suis un *test* _test_ ~test~ ```js const test = ""; ``` `test`';


/*
 * Component
 */
const App = () => (
  <div> <Message message={message} /> </div>
);


/*
 * Render
 */
render(<App />, document.getElementById('root'));
