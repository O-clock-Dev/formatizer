/*
 * Package import
 */

/*
 * Local import
 */
import { Emoji, Code, Blockquote, Link, Mention } from 'src/components/Piece';

/*
 * Code
 */
const patterns = [
  {
    pattern: /`(.+?)`/g,
    Component: Code,
  },
  {
    pattern: /(?:^|\n)>\s?([^\n]+)\n?/gm,
    Component: Blockquote,
  },
  {
    // @ TODO : Améliorer la regex,
    // sinon ça prend en compte un espace à la fin,
    // et ça le supprime lors de la transformation.
    pattern: /(https?:\/\/(?:[^\s()]|\(.+?\))+?)($|\s|[.,?!:;)]\s)/g,
    Component: Link,
  },
  {
    // @ TODO : Améliorer la regex,
    // sinon ça prend en compte un espace à la fin,
    // et ça le supprime lors de la transformation.
    pattern: /(@[a-z0-9_]+)($|\s|[.,?!:;)])/gi,
    Component: Mention,
  },
  {
    pattern: /(:[?+\-0-9A-Za-z_]+:)/gi,
    Component: Emoji,
  },
];

/*
 * Export
 */
export default patterns;
