/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Glamorous from 'glamorous';


/*
 * Local Import
 */


/*
 * Style
 */
const Style = Glamorous.span({
  display: 'inline',
});


/*
 * Component
 */
const Character = ({ children }) => <Style>{children}</Style>;


/*
 * PropTypes
 */
Character.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
};


/*
 * Export
 */
export default Character;
