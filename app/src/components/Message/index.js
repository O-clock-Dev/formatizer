/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local Import
 */
import { displayHtml } from 'src/components/Message/Fragment/display';


/*
 * Code
 */


/*
 * Component
 */
const Message = ({ message }) => (
  <div className="course-chat-content course-chat-content--message">
    {displayHtml(message)}
  </div>
);


/*
 * PropTypes
 */
Message.propTypes = {
  message: PropTypes.string.isRequired,
};


/*
 * Export default
 */
export default Message;
