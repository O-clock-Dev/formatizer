/* eslint-disable max-len */

/*
 * Package Import
 */
import React from 'react';
import { render } from 'react-dom';

// Used for dev.
import { Formatizer, Picker } from '../src';
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
    // message:
    // 'test *test* _test_ ~test~\n\n> test test\n\n\n:star: test :sunglasses: :heart: test :scream: :smile: :thumbsup_tone5: :-1_tone2: :D :test: :) 8-) :+1: \n\n```js\nconst abc = "test";\nconst def = 123;\n\nreturn abc + def;\n```\n\n test `test`\n\nhttps://github.com/O-clock/formatizer\n\n@test_mention',
    // message: 'Hello :thumbsup_tone5: :+1_tone3: comment ça va ? :wave: :test:',
    message: 'je suis un *test*, et oui _monsieur_ @alex ! :scream:',
  };

  /*
   * Actions
   */
  inputChange = (event) => {
    const { value } = event.target;
    this.setState({ message: value });
  };

  handleEmoji = ({ shortname }) => {
    const { message } = this.state;
    const value = `${message} ${shortname}`.trim();
    this.setState({ message: value });
  };

  /*
   * View
   */
  render() {
    const { message } = this.state;
    return (
      <div>
        {/* This textarea got message but doesn't format by Formatizer. */}
        <textarea
          style={{ height: '300px', width: '200px' }}
          onChange={this.inputChange}
          value={message}
        />

        {/* Formatizer will format your chat */}
        <Formatizer>{message}</Formatizer>

        {/* Emoji Picker */}
        <div style={{ height: '350px', width: '276px' }}>
          <Picker onChange={this.handleEmoji} />
        </div>
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
