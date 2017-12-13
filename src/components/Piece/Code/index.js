/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import { Style } from './style';

/*
 * Pattern
 */
export const patternCode = /`(.+?)`/g;

/*
 * Style
 */

/*
 * Component
 */
const Code = ({ children }) => {
  // Get rid of first and last `
  const value = children.slice(1, -1);

  return <Style>{value}</Style>;
};

/*
 * PropTypes
 */
Code.propTypes = {
  children: PropTypes.any.isRequired,
};

/*
 * Export
 */
export default Code;
