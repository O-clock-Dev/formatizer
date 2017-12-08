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
const Character = ({ children }) => (
  <Style dangerouslySetInnerHTML={{ __html: children }} />
);


/*
 * PropTypes
 */
Character.propTypes = {
  children: PropTypes.string.isRequired,
};


/*
 * Export
 */
export default Character;
