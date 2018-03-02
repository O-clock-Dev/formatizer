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
export const patternColor = /#(?:[0-9a-f]{3}){1,2}(?=\s|$)/gi;

/*
 * Component
 */
const Color = ({ children }) => <Style color={children}>{children}</Style>;

/*
 * PropTypes
 */
Color.propTypes = {
  children: PropTypes.any.isRequired,
};

/*
 * Export
 */
export default Color;
