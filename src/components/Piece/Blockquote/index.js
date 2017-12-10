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
 * Pattern
 */
export const patternBlockquote = /(?:^|\n)>\s?([^\n]+)\n?/gm;

/*
 * Style
 */
const Style = Glamorous.span({
  display: 'block',
  borderLeft: '3px solid rgba(255,255,255,0.2)',
  fontStyle: 'italic',
  paddingLeft: '.7em',
  '&:last-of-type': {
    marginBottom: '.2em',
  },
});

/*
 * Component
 */
const Blockquote = ({ children }) => <Style>{children}</Style>;

/*
 * PropTypes
 */
Blockquote.propTypes = {
  children: PropTypes.any.isRequired,
};

/*
 * Export
 */
export default Blockquote;
