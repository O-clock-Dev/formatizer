/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Emojione from 'emojione';


/*
 * Local import
 */


/*
 * Parameters
 */
Emojione.imageType = 'svg';
Emojione.sprites = true;
Emojione.imagePathSVGSprites = 'images/common/emojione.svg';


/*
 * Code
 */
export const shortnameToImage = emoji =>
  Emojione.shortnameToImage(emoji);

const EmojioneContainer = ({ className, emoji }) => (
  <span
    className={className || 'emojione-container'}
    dangerouslySetInnerHTML={{ __html: shortnameToImage(emoji) }}
  />
);


/*
 * PropTypes
 */
EmojioneContainer.propTypes = {
  className: PropTypes.string,
  emoji: PropTypes.string.isRequired,
};

EmojioneContainer.defaultProps = {
  className: 'emojione-container',
};


/*
 * Export default
 */
export default EmojioneContainer;
