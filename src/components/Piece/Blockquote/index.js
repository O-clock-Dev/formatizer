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
export const patternBlockquote = /(?:^|\n.)>[^\n]+\n?/gm;

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
