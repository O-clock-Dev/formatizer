/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Format from 'src/components/Format';
import Character from 'src/components/Piece/Character';

/*
 * Pattern
 */
export const patternTextFormat = /(\s|^)((?:\*.+?\*|~.+?~|_.+?_))(?=\s|$)/g;

/*
 * Get style by char
 */
const getStyle = (char) => {
  switch (char) {
    case '*':
      return {
        fontWeight: 700,
      };

    case '~':
      return {
        textDecoration: 'line-through',
      };

    case '_':
      return {
        fontStyle: 'italic',
      };

    default:
      return {};
  }
};

/*
 * TextFormat
 * Remove first and last character
 */
const TextFormat = ({ children }) => {
  const [, before, format] = patternTextFormat.exec(children);

  // Text
  const firstChar = format.slice(0, 1);
  const text = format.slice(1).slice(0, -1);

  // View
  return (
    <React.Fragment>
      {before && <Character>{before}</Character>}
      <span style={getStyle(firstChar)}>
        <Format>{text}</Format>
      </span>
    </React.Fragment>
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
