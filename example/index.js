/*
 * Package Import
 */
import React from 'react';
import { render } from 'react-dom';

// Used for dev.
import Formatizer from '../src';
// Usually, you should import like this.
// import Formatizer from 'formatizer';


/*
 * Local Import
 */


/*
 * Component
 */
class App extends React.Component {
  /*
   * State
   */
  state = {
    // eslint-disable-next-line
    message: "test *test* _test_ ~test~\n\n> test test\n\n\n:star: test :sunglasses: :heart: test :scream: :smile: :D :test: :) 8-)\n\n```js\nconst abc = \"test\";\nconst def = 123;\n\nreturn abc + def;\n```\n\n test `test`\n\nhttps://github.com/O-clock/formatizer\n\n@test_mention",
  }


  /*
   * Actions
   */
  inputChange = (event) => {
    const { value } = event.target;
    this.setState({ message: value });
  }


  /*
   * View
   */
  render() {
    const { message } = this.state;
    return (
      <div>
        {/* This textarea got message but doesn't format by Formatizer. */}
        <textarea
          onChange={this.inputChange}
          style={{ height: '300px', width: '200px' }}
          value={message}
        />

        {/* Formatizer will format your chat
          and display Hello in bold, world in italic,
          and show star's emoji */}
        <Formatizer message={message} />
      </div>
    );
  }
}


/*
 * Render
 */
document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('root'));
});
