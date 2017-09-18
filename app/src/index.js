/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local Import
 */
import { displayHtml } from './components/Fragment/display';


/*
 * Code
 */


/*
 * Component
 */
class Format extends React.Component {
  static propTypes = {
    message: PropTypes.any.isRequired,
  }


  /*
   * defaultProps
   */
  static get defaultProps() {
    return {
      message: '',
    };
  }


  /*
   * State
   */
  state = {}


  /*
   * Render
   */
  render() {
    const { message } = this.props;


    return (
      <div>{displayHtml(message)}</div>
    );
  }
}


/*
 * Export
 */
export default Format;
