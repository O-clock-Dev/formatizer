/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local Import
 */
import Format from 'src/components/Format';
import { Style } from './style';


/*
 * Pattern
 */
export const pattern = /_(.+?)_/gm;


/*
 * Component
 */
const Italic = ({ children }) => (
  <Style>
    <Format>{children}</Format>
  </Style>
);

/*
 * PropTypes
 */
Italic.propTypes = {
  children: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Italic;
