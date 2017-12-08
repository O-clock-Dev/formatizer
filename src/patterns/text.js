/*
 * Package Import
 */

/*
 * Local Import
 */
import Bold from 'src/components/Fragments/Fragment/Bold';
import Italic from 'src/components/Fragments/Fragment/Italic';
import Strike from 'src/components/Fragments/Fragment/Strike';

/*
 * Code
 */
const patterns = [
  {
    pattern: /\*(.+?)\*($|\s|[.,?!:;)])/gm,
    Component: Bold,
  },
  {
    pattern: /_(.+?)_($|\s|[.,?!:;)])/gm,
    Component: Italic,
  },
  {
    pattern: /~(.+?)~($|\s|[.,?!:;)])/gm,
    Component: Strike,
  },
];

/*
 * Export
 */
export default patterns;
