/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Glamorous from 'glamorous';

/*
 * Local Import
 */
import Format from 'src/components/Format';

/*
 * Style
 */
const Style = Glamorous.span({ display: 'inline', fontWeight: 700 });

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
