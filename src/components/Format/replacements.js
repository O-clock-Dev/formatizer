/*
 * Local Import
 */

// Priorities
import Spoil, { patternSpoil } from 'src/components/Piece/Spoil';
import Highlight, { patternHighlight } from 'src/components/Piece/Highlight';
import Code, { patternCode } from 'src/components/Piece/Code';
import Blockquote, { patternBlockquote } from 'src/components/Piece/Blockquote';
import Link, { patternLink } from 'src/components/Piece/Link';
import Mention, { patternMention } from 'src/components/Piece/Mention';

// Text
import ColorFormat, { patternColor } from 'src/components/Piece/Color';
import {
  Bold,
  Italic,
  Strike,
  patternBold,
  patternItalic,
  patternStrike,
} from 'src/components/Piece/TextFormat';

// Emoji
import Colon, { patternColon } from 'src/components/Piece/Emoji/colon';
import Smiley, { patternSmiley } from 'src/components/Piece/Emoji/smiley';

// Character
import Character, { patternCharacter } from 'src/components/Piece/Character';

/*
 * Export
 */
export default [
  // Priorities
  [
    {
      pattern: patternSpoil,
      Component: Spoil,
    },
    {
      pattern: patternHighlight,
      Component: Highlight,
    },
  ],
  {
    pattern: patternCode,
    Component: Code,
  },
  {
    pattern: patternBlockquote,
    Component: Blockquote,
  },
  {
    pattern: patternLink,
    Component: Link,
  },
  {
    pattern: patternColor,
    Component: ColorFormat,
  },
  {
    pattern: patternMention,
    Component: Mention,
    check: ({ props, match }) => {
      if (!match) {
        return false;
      }
      const mention = match.slice(1);
      return props.isMention(mention) || props.isMentionMe(mention);
    },
  },

  // TextFormat
  [
    {
      pattern: patternBold,
      Component: Bold,
    },
    {
      pattern: patternItalic,
      Component: Italic,
    },
    {
      pattern: patternStrike,
      Component: Strike,
    },
  ],

  // Emojis
  {
    pattern: patternColon,
    Component: Colon,
  },
  {
    pattern: patternSmiley,
    Component: Smiley,
  },

  // Character
  {
    pattern: patternCharacter,
    Component: Character,
  },
];
