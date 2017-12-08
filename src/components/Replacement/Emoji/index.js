/*
 * Package import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Emojione from 'emojione';
import glamorous from 'glamorous';

/*
 * Local import
 */

/*
 * Style
 */
const Style = glamorous.span({
  display: 'inline',
  '& .emojione': { display: 'inline', height: '1.2em', width: '1.2em' },
});

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
const EmojioneContainer = ({ children }) => (
  <Style dangerouslySetInnerHTML={{ __html: shortnameToImage(children) }} />
);

/*
 * PropTypes
 */
EmojioneContainer.propTypes = {
  children: PropTypes.string.isRequired,
};

/*
 * Export default
 */
export default EmojioneContainer;
