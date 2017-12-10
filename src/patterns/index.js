/*
 * Local Import
 */

// Priorities
import Highlight, {
  pattern as patternHighlight,
} from 'src/components/Piece/Highlight';
import Code, { pattern as patternCode } from 'src/components/Piece/Code';
import Blockquote, {
  pattern as patternBlockquote,
} from 'src/components/Piece/Blockquote';
import Link, { pattern as patternLink } from 'src/components/Piece/Link';
import Mention, {
  pattern as patternMention,
} from 'src/components/Piece/Mention';

// Emoji
import Emoji, {
  patternColons,
  patternSmiley,
  patternSmileyInsensitive,
} from 'src/components/Piece/Emoji';

// Text
import TextFormat, {
  pattern as patternTextFormat,
} from 'src/components/Piece/TextFormat';

// Character
import Character, {
  pattern as patternCharacter,
} from 'src/components/Piece/Character';

/*
 * Export
 */
export default [
  // Priorities
  {
    pattern: patternHighlight,
    Component: Highlight,
  },
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
    pattern: patternMention,
    Component: Mention,
  },

  // Emojis
  {
    pattern: patternColons,
    Component: Emoji,
  },
  {
    pattern: patternSmiley,
    Component: Emoji,
  },
  {
    pattern: patternSmileyInsensitive,
    Component: Emoji,
  },

  // Text
  {
    pattern: patternTextFormat,
    Component: TextFormat,
  },

  // Character
  {
    pattern: patternCharacter,
    Component: Character,
  },
];
