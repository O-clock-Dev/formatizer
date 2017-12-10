/*
 * Package import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Emojione from 'emojione';

/*
 * Local import
 */
import Format from 'src/components/Format';
import { Style } from './style';
import smileyToColon from './smiley';

/*
 * Pattern
 */
/* eslint-disable max-len */
// @TODO ":) :)" does not work
export const patternColons = /:[?+\-0-9A-Za-z_]+:/gi;
export const patternSmiley = /(\s|^)(8-?\)|:-?\||:o\)|=-?\)|;-?\)|:-?>|>:-?\(|:-?\)|:-?\(|:-?\/|:-?\\|D:|:-?d|:-?o|:-?x|:-?p|:-?\*|:'\(|:-?D|:-?O|:-?X|:-?P)(\s|$)/g;

/*
 * Parameters
 */
Emojione.imageType = 'svg';
Emojione.sprites = true;
Emojione.imagePathSVGSprites = '/images/common/emojione.svg';

/*
 * Code
 */
export const shortnameToImage = emoji => Emojione.shortnameToImage(emoji);

/*
 * Components
 */
// @TODO Get rid of <span> with React 16.2
const Emoji = ({ children }) => {
  let before = '';
  let emoji = children;
  let after = '';

  // Smiley ?
  const matches = patternSmiley.exec(children);
  patternSmiley.lastIndex = 0;
  if (matches) {
    before = !!matches[1] && <Format>{matches[1]}</Format>;
    emoji = smileyToColon[matches[2]];
    after = !!matches[3] && <Format>{matches[3]}</Format>;
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
