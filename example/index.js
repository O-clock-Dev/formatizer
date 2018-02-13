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
const usersList = ['Alexandre', 'Carine', 'Maxime'];

const user = {
  id: 1,
  username: 'Alexandre',
};

/*
 * Code
 */
const isMentionMe = mention =>
  mention === user.username || mention === 'question';

const isMention = mention =>
  mention === 'question' || usersList.includes(mention);

/*
 * Component
 */
class App extends React.Component {
  /*
   * State
   */
  state = {
    pickerIsActive: false,
    // message:
    //   'test *test* _test_ ~test~\n\n> test test\n\n\n:star: test :sunglasses: :heart: test :scream: :smile: :thumbsup_tone5: :-1_tone2: :D :test: :) 8-) :+1: \n\n```js\nconst abc = "test";\nconst def = 123;\n\nreturn abc + def;\n```\n\n test `test`\n\nhttps://github.com/O-clock/formatizer\n\n@test_mention test @test',
    message:
      "@question Bonjour, je m'appelle @alex, et je comprends rien à Downshift. Quelqu'un peut m'aider ?",
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
          // On l'utilisera pas dans oLMS, mais je trouve ça cool de le dev quand même
          onMention={mention =>
            console.log(`hey, ${mention} a été mentionné dans le chat :)`)
          }
          // onMentionMe={actions.notifMention}
        >
          {message}
        </Formatizer>

        {/* <Formatizer isMention={isMention}>{message}</Formatizer> */}

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
