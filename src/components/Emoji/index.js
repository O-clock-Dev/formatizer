/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Emoji } from 'emoji-mart';


/*
 * Local import
 */


/*
 * Component
 */
const EmojiContainer = ({ emoji }) => (
  <Emoji
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
