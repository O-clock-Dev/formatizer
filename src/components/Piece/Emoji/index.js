/*
 * Package import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Emoji as Emojimart } from 'emoji-mart';

/*
 * Local import
 */
import Character from 'src/components/Piece/Character';
import { smileyReplace, smileyStr } from './smiley';

/*
 * Pattern
 */
export const smileyRegexp = new RegExp(smileyStr, 'gi');
export const patternColon = /(?::([^:]+):)(?::skin-tone-(\d):)?/gi;
export const patternSmiley = new RegExp(`(^|\\s|)((?:${smileyStr}))`, 'gi');

/*
 * Components
 */
// @TODO Get rid of <span> with React 16.2
// @TODO Use Character to create <br /> ?
const Emoji = ({ children }) => {
  let before = '';
  let emoji = children;

  // Smiley ?
  const matches = patternSmiley.exec(children);
  patternSmiley.lastIndex = 0;

  if (matches) {
    before = !!matches[1] && <Character>{matches[1]}</Character>;
    emoji = matches[2]
      .replace(smileyRegexp, smileyReplace)
      .replace(/\n{2,}/g, '<br /><br />')
      .replace(/\n/g, '<br />');
  }

  return (
    <span>
      {before}
      <span
        dangerouslySetInnerHTML={{
          __html: Emojimart({
            html: true,
            set: 'twitter',
            emoji,
            fallback: (emojix, props) =>
              (emojix ? `:${emojix.short_names[0]}:` : props.emoji),
            size: 16,
          }),
        }}
      />
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
