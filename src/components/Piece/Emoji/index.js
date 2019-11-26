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
export const patternColon = /(?::([+a-zA-Z0-9-][^{}():,\s]+):)(?::skin-tone-(\d):)?/gi;
export const patternSmiley = new RegExp(`${smileyStr}`, 'gi');
// export const patternSmiley = new RegExp(
//   `(\\s|^)((?:${smileyStr}\\s*)+)(?=\\s|$)`,
//   'gi',
// );

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
    before = !!matches[2] && <Character>{matches[2]}</Character>;
    emoji = matches[1]
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
            fallback: (emojiFound, props) =>
              (emojiFound ? `:${emojiFound.short_names[0]}:` : props.emoji),
            size: 16,
          }),
        }}
      />
      {before}
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
