/*
 * Package import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Emojione from 'emojione';

/*
 * Local import
 */
import { EmojiContainer } from './style';

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

const EmojioneContainer = ({ emoji }) => (
  <EmojiContainer
    dangerouslySetInnerHTML={{ __html: shortnameToImage(emoji) }}
  />
);

/*
 * PropTypes
 */
EmojioneContainer.propTypes = {
  emoji: PropTypes.string.isRequired,
};

/*
 * Export default
 */
export default EmojioneContainer;
