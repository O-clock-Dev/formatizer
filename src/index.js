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
const Format = ({ className, children, mention }) => (
  <div className={className}>{displayHtml(children, mention)}</div>
);

/*
 * PropTypes
 */
Format.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  mention: PropTypes.bool,
};

Format.defaultProps = {
  className: '',
  children: '',
  mention: false,
};

/*
 * Export
 */
export default Format;
