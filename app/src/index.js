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


/*
 * Component
 */
class App extends React.Component {
  /*
   * State
   */
  state = {
    message: '',
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
      <div>
        <textarea onChange={this.onChange} />
        <Message message={message} />
      </div>
    );
  }
}


/*
 * Render
 */
render(<App />, document.getElementById('root'));
