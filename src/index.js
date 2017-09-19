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
const Format = ({ message }) => (
  <div>{displayHtml(message)}</div>
);


/*
 * PropTypes
 */
Format.propTypes = {
  message: PropTypes.string,
};

Format.defaultProps = {
  message: '',
};


/*
 * Export
 */
export default Format;
