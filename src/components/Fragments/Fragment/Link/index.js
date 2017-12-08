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
const Style = Glamorous.a({
  textDecoration: 'underline',
  textDecorationSkip: 'ink',
});

/*
 * Component
 */
const Link = ({ children }) => (
  <Style href={children} target="_blank" rel="noopener noreferrer">
    {children}
  </Style>
);

/*
 * PropTypes
 */
Link.propTypes = {
  children: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Link;
