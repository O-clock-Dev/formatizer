import Character, {
  pattern as patternCharacter,
} from 'src/components/Piece/Character';
import Highlight, {
  pattern as patternHighlight,
} from 'src/components/Piece/Highlight';
import TextFormat, {
  pattern as patternTextFormat,
} from 'src/components/Piece/TextFormat';
// import emojis from './emojis';
// import priorities from './priorities';

export default [
  {
    pattern: patternHighlight,
    Component: Highlight,
  },
  // ...priorities,
  // ...emojis,
  {
    pattern: patternTextFormat,
    Component: TextFormat,
  },
  {
    pattern: patternCharacter,
    Component: Character,
  },
];
