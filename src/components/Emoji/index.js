/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Emoji, emojiIndex } from 'emoji-mart';


/*
 * Local import
 */

/*
 * Code
 */
/*
  * Test if Emoji's props matchs with smiley database
  */
const emojiExist = (emoji) => {
  // GetName = [':', 'emoji', ':']
  const getName = emoji.split(':');
  const newObj = Object.keys(emojiIndex.emojis);
  const emojisColons = newObj.filter(obj => obj === getName[1]);
  return emojisColons;
};


/*
 * Component
 */
const EmojiContainer = ({ emoji }) => {
  const emojisColons = emojiExist(emoji);


  /*
   * View
   */
  return (
    (!emojisColons.length)

      // If Smiley doesn't exist, return string emoji
      ? <span>{emoji}</span>

      // Otherwise, display Emoji
      : <Emoji
        emoji={emoji}
        size={32}
        set={'apple'}
        sheetSize={32}
        // Local
        // backgroundImageFn={(set, sheetSize) => `/images/sheet_${set}_${sheetSize}.png`}

        // Remote
        backgroundImageFn={((set, sheetSize) =>
          `https://unpkg.com/emoji-datasource-${set}@3.0.0/img/${set}/sheets/${sheetSize}.png`)}
      />
  );
};


/*
 * PropTypes
 */
EmojiContainer.propTypes = {
  emoji: PropTypes.string.isRequired,
};


/*
 * Export
 */
export default EmojiContainer;
