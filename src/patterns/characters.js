/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import { Character } from 'src/components/Piece';

/*
 * Code
 */
const characters = [
  {
    pattern: /\n{2,}/g,
    replace: (
      <span>
        <br />
        <br />
      </span>
    ),
  },
  {
    pattern: /\n/g,
    replace: <br />,
  },
  {
    pattern: /&/g,
    replace: '&',
  },
  {
    pattern: /</g,
    replace: '<',
  },
  {
    pattern: />/g,
    replace: '>',
  },
];

const characterDefault = {
  value: 2,
  Component: Character,
};

const patterns = characters.map(character => ({
  ...characterDefault,
  ...character,
}));

/*
 * Export
 */
export default patterns;
