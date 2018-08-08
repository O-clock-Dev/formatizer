/*
 * Package import
 */
import Emojione from 'emojione';

/*
 * Config setter
 */
const setImagePath = (path) => {
  Emojione.imagePathSVGSprites = path;
  Emojione.imageType = 'svg';
  Emojione.sprites = true;
};

/*
 * Export
 */
export default setImagePath;
