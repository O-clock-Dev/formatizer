/* eslint-disable max-len */
/*
 * Package import
 */
import { Emoji, Picker } from 'emoji-mart';

/*
 * Code
 */
// Config setter
const setImagePath = (path) => {
  Emoji({ backgroundImageFn: () => path });
  Picker({ backgroundImageFn: () => path });
};

/*
 * Export default
 */
export default setImagePath;
