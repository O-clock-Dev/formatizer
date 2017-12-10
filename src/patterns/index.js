import Character, {
  pattern as patternCharacter,
} from 'src/components/Piece/Character';
import Highlight, {
  pattern as patternHighlight,
} from 'src/components/Piece/Highlight';
import emojis from './emojis';
import priorities from './priorities';
import text from './text';

export default [
  {
    pattern: patternHighlight,
    Component: Highlight,
  },
  ...priorities,
  ...emojis,
  ...text,
  {
    pattern: patternCharacter,
    Component: Character,
  },
];
