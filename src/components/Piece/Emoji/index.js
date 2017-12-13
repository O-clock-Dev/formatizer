/* eslint-disable max-len */
/*
 * Package import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Emojione from 'emojione';

/*
 * Local import
 */
import Character from 'src/components/Piece/Character';
import { Style } from './style';
import { smileyReplace, smileyStr } from './smiley';

/*
 * Pattern
 */
const smileyRegexp = new RegExp(smileyStr, 'gi');
export const patternColon = /:[?+\-0-9A-Za-z_]+:/gi;
export const patternSmiley = new RegExp(
  `(\\s|^)((?:${smileyStr}\\s*)+)(\\s|$)`,
  'gi',
);

/*
 * Parameters
 */
Emojione.imageType = 'svg';
Emojione.sprites = true;

/*
 * Code
 */
export const shortnameToImage = emoji => Emojione.shortnameToImage(emoji);

/*
 * Components
 */
// @TODO Get rid of <span> with React 16.2
// @TODO Use Character to create <br /> ?
const Emoji = ({ children }) => {
  let before = '';
  let emoji = children;
  let after = '';

  // Smiley ?
  const matches = patternSmiley.exec(children);
  patternSmiley.lastIndex = 0;
  if (matches) {
    before = !!matches[1] && <Character>{matches[1]}</Character>;
    emoji = matches[2]
      .replace(smileyRegexp, smileyReplace)
      .replace(/\n{2,}/g, '<br /><br />')
      .replace(/\n/g, '<br />');
    after = !!matches[3] && <Character>{matches[3]}</Character>;
  }
  return (
    <span>
      {before}
      <Style dangerouslySetInnerHTML={{ __html: shortnameToImage(emoji) }} />
      {after}
    </span>
  );
};

/*
 * PropTypes
 */
Emoji.propTypes = {
  children: PropTypes.string.isRequired,
};

/*
 * Export default
 */
export default Emoji;
