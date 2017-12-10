/*
 * Package Import
 */

/*
 * Local Import
 */
import { Bold, Italic, Strike } from 'src/components/Piece';

/*
 * Code
 */
const patterns = [
  {
    pattern: /\*(.+?)\*/gm,
    Component: Bold,
  },
  {
    pattern: /_(.+?)_/gm,
    Component: Italic,
  },
  {
    pattern: /~(.+?)~/gm,
    Component: Strike,
  },
];

/*
 * Export
 */
export default patterns;
