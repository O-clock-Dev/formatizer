import Character, { pattern as pC } from 'src/components/Piece/Character';
import Highlight, { pattern as pH } from 'src/components/Piece/Highlight';
import TextFormat, { pattern as pTF } from 'src/components/Piece/TextFormat';
// import emojis from './emojis';
// import priorities from './priorities';

export default [
  {
    pattern: pH,
    Component: Highlight,
  },
  // ...priorities,
  // ...emojis,
  {
    pattern: pTF,
    Component: TextFormat,
  },
  {
    pattern: pC,
    Component: Character,
  },
];
