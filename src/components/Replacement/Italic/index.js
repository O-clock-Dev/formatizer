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
const Style = Glamorous.span({
  display: 'inline',
  fontStyle: 'italic',
});

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
