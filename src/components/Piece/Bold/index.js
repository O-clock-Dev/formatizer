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
export const pattern = /\*(.+?)\*/gm;


/*
 * Component
 */
const Bold = ({ children }) => (
  <Style>
    <Format>{children}</Format>
  </Style>
);

/*
 * PropTypes
 */
Bold.propTypes = {
  children: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Bold;
