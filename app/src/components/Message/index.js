/*
 * Package Import
 */
import React, { PropTypes } from 'react';


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
const ContentMessage = ({ message }) => (
  <div className="course-chat-content course-chat-content--message">
    {displayHtml(message)}
  </div>
);


/*
 * PropTypes
 */
ContentMessage.propTypes = {
  message: PropTypes.string.isRequired,
};


/*
 * Export default
 */
export default ContentMessage;
