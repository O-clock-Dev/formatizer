/*
 * Package Import
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Format from 'src/components/Format';
import Character from 'src/components/Piece/Character';
import getStyle from './style';

/*
 * Pattern
 */
export const patternTextFormat = /(\s|^)((?:\*.+?\*|~.+?~|_.+?_))(?=\s|$)/g;

/*
 * TextFormat
 * Remove first and last character
 */
const TextFormat = ({ children }) => {
  const [, before, format] = patternTextFormat.exec(children);

  // Text
  const firstChar = format.slice(0, 1);
  const text = format.slice(1).slice(0, -1);

  // Style
  const Style = getStyle(firstChar);

  // View
  return (
    <Fragment>
      {before && <Character>{before}</Character>}
      <Style>
        <Format>{text}</Format>
      </Style>
    </Fragment>
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
