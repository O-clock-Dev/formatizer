/* eslint-disable max-len */
/*
 * Package Import
 */
import React from 'react';
import { render } from 'react-dom';

/*
 * Local import
 */
import { Formatizer, Picker, setImagePath } from '../src';

/*
 * Setup
 */
setImagePath('/images/common/emojione.svg');

/*
 * Init
 */
const users = [
  { id: 0, mention: 'question' },
  { id: 1, mention: 'test_mention_me' },
  { id: 2, mention: 'someone' },
];

const isMention = (mention) => {
  const userExists = users.find(user => mention === user.mention);
  if (userExists) {
    return mention === userExists.mention;
  }
  return false;
};

const isMentionMe = mention =>
  mention === 'test_mention_me' || mention === 'question';

/* eslint-disable no-console */
const onMention = mention =>
  console.log(`Hey, ${mention} has been mentioned in the chat! :)`);

const onMentionMe = mention =>
  console.log(
    `Hey, I have been mentioned in the chat, I succeeded ${mention}! :)`,
  );
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
      'test *test* _test_ ~test~\n\n> test test\n\n\n:star: test :sunglasses: :heart: test :scream: :smile: :thumbsup_tone5: :-1_tone2: :D :test: :) 8-) :+1: \n\n```js\nconst abc = "test";\nconst def = 123;\n\nreturn abc + def;\n```\n\n test `test`\n\nhttps://github.com/O-clock/formatizer\n\n@test_mention_me @question @someone @coucou test',
    // message: 'Bonjour, je suis un `code\n`',
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

  handlePicker = () => {
    this.setState(prevPops => ({ pickerIsActive: !prevPops.pickerIsActive }));
  };

  /*
   * View
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
