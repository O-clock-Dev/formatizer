/* eslint-disable max-len */
/*
 * Package import
 */
import Emojione from 'emojione';

/*
 * Code
 */
// Default values
const defaultImagePath =
  'https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/sprites/emojione.sprites.svg';
Emojione.imageType = 'svg';
Emojione.sprites = true;

// Config setter
const setImagePath = (path = defaultImagePath) => {
  Emojione.imagePathSVGSprites = path;
};

// Apply default params
setImagePath();

/*
 * Export default
 */
export default setImagePath;
