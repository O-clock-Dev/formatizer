/*
 * Package Import
 */

/*
 * Local Import
 */
import Bold from 'src/components/Fragment/Bold';
import Italic from 'src/components/Fragment/Italic';
import Strike from 'src/components/Fragment/Strike';

/*
 * Code
 */
const patterns = [
  {
    pattern: /\*(.+?)\*/gm,
    Component: Bold,
    value: 1,
  },
  {
    pattern: /_(.+?)_/gm,
    Component: Italic,
    value: 1,
  },
  {
    pattern: /~(.+?)~/gm,
    Component: Strike,
    value: 1,
  },
];

/*
 * Export
 */
export default patterns;
