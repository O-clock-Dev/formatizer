/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

/*
 * Local Import
 */
import Format from 'src/components/Format';

/*
 * Pattern
 */
export const patternBlockquote = /(?:^|\n.)>[^\n]+\n?/gm;

/*
 * Style
 */
const Style = glamorous.span({
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
const Blockquote = ({ children }) => {
  // Leave the ">"
  const value = children.slice(1);

  return (
    <Style>
      <Format>{value}</Format>
    </Style>
  );
};

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
