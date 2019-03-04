/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import Format from 'src/components/Format';
import Character from 'src/components/Piece/Character';
import * as S from './style';

/*
 * Pattern
 */
export const patternBold = /(\s|^)(\*.+?\*)(?=\s|$)/g;
export const patternItalic = /(\s|^)(_.+?_)(?=\s|$)/g;
export const patternStrike = /(\s|^)(~.+?~)(?=\s|$)/g;

/*
 * TextFormat
 * Remove first and last character
 */
// eslint-disable-next-line react/prop-types
const create = (Style, pattern) => ({ children }) => {
  const [, before, format] = pattern.exec(children);

  // Text
  const text = format.slice(1).slice(0, -1);

  // View
  return (
    <span>
      {before && <Character>{before}</Character>}
      <Style>
        <Format>{text}</Format>
      </Style>
    </span>
  );
};

export const Bold = create(S.Bold, patternBold);
export const Italic = create(S.Italic, patternItalic);
export const Strike = create(S.Strike, patternStrike);
