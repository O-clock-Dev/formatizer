import Character, {
  pattern as patternCharacter,
} from 'src/components/Piece/Character';
import emojis from './emojis';
import priorities from './priorities';
import text from './text';

export default [
  ...priorities,
  ...emojis,
  ...text,
  {
    pattern: patternCharacter,
    Component: Character,
    value: 1,
  },
];
