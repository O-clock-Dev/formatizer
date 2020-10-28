/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

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
const style = {
  display: 'block',
  borderLeft: '3px solid rgba(255,255,255,0.2)',
  fontStyle: 'italic',
  paddingLeft: '.7em',
};

/*
 * Component
 */
const Blockquote = ({ children }) => {
  // Leave the ">"
  const value = children.slice(1);

  return (
    <span style={style} className="formatizer-blockquote">
      <Format>{value}</Format>
    </span>
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
