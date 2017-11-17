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
 * Component
 */
const Format = ({ className, message }) => (
  <div className={className}>
    {displayHtml(message)}
  </div>
);


/*
 * PropTypes
 */
Format.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
};

Format.defaultProps = {
  message: '',
  className: '',
};


/*
 * Export
 */
export default Format;
