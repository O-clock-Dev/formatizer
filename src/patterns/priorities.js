/*
 * Package import
 */

/*
 * Local import
 */
import {
  Emoji,
  Code,
  Blockquote,
  Link,
  Mention,
  Highlight,
} from 'src/components/Piece';

/*
 * Code
 */
const patterns = [
  {
    pattern: /```(?:([a-z0-9-]+)(?:\s|\n))?((?:.|\n)+?)```\n?/g,
    Component: Highlight,
    attrs: [{ name: 'language', value: 1 }],
    value: 2,
  },
  {
    pattern: /`(.+?)`/g,
    Component: Code,
    value: 1,
  },
  {
    pattern: /(?:^|\n)>\s?([^\n]+)\n?/gm,
    Component: Blockquote,
    value: 1,
  },
  {
    // @ TODO : Améliorer la regex,
    // sinon ça prend en compte un espace à la fin,
    // et ça le supprime lors de la transformation.
    pattern: /(https?:\/\/(?:[^\s()]|\(.+?\))+?)($|\s|[.,?!:;)]\s)/g,
    Component: Link,
    value: 1,
  },
  {
    // @ TODO : Améliorer la regex,
    // sinon ça prend en compte un espace à la fin,
    // et ça le supprime lors de la transformation.
    pattern: /(@[a-z0-9_]+)($|\s|[.,?!:;)])/gi,
    Component: Mention,
    value: 1,
  },
  {
    pattern: /(:[?+\-0-9A-Za-z_]+:)/gi,
    Component: Emoji,
    value: 1,
  },
];

/*
 * Export
 */
export default patterns;
