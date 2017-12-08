/*
 * Package Import
 */

/*
 * Local Import
 */
import { Bold, Italic, Strike } from 'src/components/Replacement';

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
