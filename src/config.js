/* eslint-disable max-len */
/*
 * Package import
 */
import Emojione from 'emojione';

/*
 * Code
 */
// Config setter
const setImagePath = (path) => {
  Emojione.imagePathSVGSprites = path;
  Emojione.imageType = 'svg';
  Emojione.sprites = true;
};

/*
 * Export default
 */
export default setImagePath;
