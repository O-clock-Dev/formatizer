/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Format from 'src/components/Format';
import { Details, Summary } from './style';

/*
 * Patterns
 */
const regexp = '###(?:\\s)?((?:.|\\n)+?)###\\n?';
export const patternSpoil = new RegExp(regexp, 'g');

/*
 * Component
 */
const Spoil = ({ children }) => {
  // Never forget to reset lastIndex after a .exec()
  const matches = patternSpoil.exec(children);
  patternSpoil.lastIndex = 0;

  // Capturing paren: Text + Trim it !
  const prevCode = matches[1];
  const spoiler = prevCode[0] === '\n' ? prevCode.slice(1) : prevCode;

  return (
    <Details>
      <Summary>Spoiler</Summary>
      <Format>{spoiler}</Format>
    </Details>
  );
};

/*
 * PropTypes
 */
Spoil.propTypes = {
  children: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Spoil;
