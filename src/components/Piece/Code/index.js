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
const Code = ({ children }) => <Style>{children}</Style>;

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
