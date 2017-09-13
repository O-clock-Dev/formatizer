/*
 * Package Import
 */
import React from 'react';
import { render } from 'react-dom';


/*
 * Local Import
 */
import Message from './components/Message';
import { Textarea } from './style';


/*
 * Code
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
    message: ":star: `test`\n@test\n@t_e_s_t\n```js\nconst a = 123;\nconst b = 'abc';\nreturn a + b; // test\n```\n*test*\n_test_\n~test~\n>Test\n"
  };


  /*
   * Actions
   */
  onChange = (evt) => {
    const { value } = evt.target;
    this.setState({ message: value });
  }


  /*
   * Render
   */
  render() {
    const { message } = this.state;


    /*
     * View
     */
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Textarea onChange={this.onChange} value={message} />
        <Message message={message} />
      </div>
    );
  }
}


/*
 * Render
 */
render(<App />, document.getElementById('root'));
