/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Format from 'src/components/Format';
import getStyle from './style';

/*
 * Pattern
 */
export const patternTextFormat = /\*.+?\*|~.+?~|_.+?_/g;

/*
 * TextFormat
 * Remove first and last character
 */
const TextFormat = ({ children }) => {
  // Text
  const firstChar = children.slice(0, 1);
  const text = children.slice(1).slice(0, -1);

  // Style
  const Style = getStyle(firstChar);

  // View
  return (
    <Style>
      <Format>{text}</Format>
    </Style>
  );
};

/*
 * PropTypes
 */
TextFormat.propTypes = {
  children: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default TextFormat;
