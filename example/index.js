/* eslint-disable max-len */
/*
 * Package Import
 */
import React from 'react';
import { render } from 'react-dom';

/*
 * Local import
 */
import { Formatizer, Picker } from '../src';
import {
  isMention,
  isMentionMe,
  onMention,
  onMentionMe,
  isTeacher,
} from './utils';

/*
 * Component
 */
class App extends React.Component {
  /*
   * State
   */
  state = {
    pickerIsActive: false,
    message:
      'test *test* _test_ ~test~\n\n> test test\n\n\n:star: test :sunglasses: :heart: test :scream: :smile: :+1::skin-tone-6: :-1::skin-tone-3: :D :test: :) 8-) :+1: \n\n```js\nconst abc = "test";\nconst def = 123;\n\nreturn abc + def;\n```\n\n test `test`\n\nhttps://github.com/O-clock/formatizer\n\n@test_mention_me @question @someone @coucou test\n\n###\ntest\n###',
    // message: ':-) :-D\n :)\n\n\n:(',
  };

  /*
   * Actions
   */
  inputChange = (event) => {
    const { value } = event.target;
    this.setState({ message: value });
  };

  handleEmoji = (emoji) => {
    const { message } = this.state;
    const value = `${message} ${emoji.colons}`.trim();
    this.setState({ message: value });
  };

  handlePicker = () => {
    this.setState(prevPops => ({ pickerIsActive: !prevPops.pickerIsActive }));
  };

  handleSpoiler = (evt) => {
    console.log('You have clicked on me !');
    console.log(evt.target);
  };

  /*
   * Render
   */
  render() {
    const { pickerIsActive, message } = this.state;

    return (
      <div>
        <button onClick={this.handlePicker}>Emoji Picker</button>
        {/* This textarea got message but doesn't format by Formatizer. */}
        <textarea
          style={{ height: '300px', width: '200px' }}
          onChange={this.inputChange}
          value={message}
        />

        {/* Formatizer will format your chat */}
        <Formatizer
          isMention={isMention}
          isMentionMe={isMentionMe}
          onMention={onMention}
          onMentionMe={onMentionMe}
          options={{
            spoiler: {
              open: isTeacher,
              onClick: this.handleSpoiler,
            },
          }}
        >
          {message}
        </Formatizer>

        {/* Emoji Picker */}
        {pickerIsActive && (
          <div style={{ height: '350px', width: '276px' }}>
            <Picker onChange={this.handleEmoji} />
          </div>
        )}
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
