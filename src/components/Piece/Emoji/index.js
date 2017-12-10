/*
 * Package import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Emojione from 'emojione';


/*
 * Local import
 */
import { Style } from './style';
import SmileyToColon from './smiley';


/*
 * Pattern
 */
export const patternColons = /(:[?+\-0-9A-Za-z_]+:)/gi;
export const patternSmiley = /8-?\)|:-?\||:o\)|=-?\)|;-?\)|:-?>|>:-?\(|:-?\)|:-?\(|:-?[\\/]|D:/g;
export const patternSmileyInsensitive = /:-?d|:-?o|:-?x|:-?p|:-?\*|:'\(/gi;


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
const Emoji = ({ children }) => {
  const emoji = SmileyToColon[children] || children;
  return (
    <Style dangerouslySetInnerHTML={{ __html: shortnameToImage(emoji) }} />
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
