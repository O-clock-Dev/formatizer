/*
 * Package import
 */

/*
 * Local import
 */
import { Code, Blockquote, Link, Mention, Highlight } from 'src/components/Replacement';
// import Emoji from 'src/components/Emoji';

/*
 * Code
 */
const patterns = [
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
];

/*
 * Export
 */
export default patterns;

/*
 * Export default
 */
// export default [
//   // {
//   //   className: 'emoji',
//   //   pattern: /(:[?+\-0-9A-Za-z_]+:)/gi,
//   //   callback: emoji => ({ value: <Emoji emoji={emoji} /> }),
//   // },
//   {
//     pattern: /\n{2,}/g,
//     replace: (
//       <span>
//         <br />
//         <br />
//       </span>
//     ),
//   },
//   {
//     pattern: /\n/g,
//     replace: <br />,
//   },
//   {
//     pattern: /&/g,
//     replace: '&',
//   },
//   {
//     pattern: /</g,
//     replace: '<',
//   },
//   {
//     pattern: />/g,
//     replace: '>',
//   },
// ];
