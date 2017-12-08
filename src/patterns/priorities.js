/*
 * Package import
 */

/*
 * Local import
 */
import Code from 'src/components/Fragments/Fragment/Code';
import Blockquote from 'src/components/Fragments/Fragment/Blockquote';
import Link from 'src/components/Fragments/Fragment/Link';
// import Highlight from 'src/components/Highlight';
// import Emoji from 'src/components/Emoji';
// import { Code, Blockquote, Link } from './style';

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
    pattern: /(https?:\/\/(?:[^\s()]|\(.+?\))+?)($|\s|[.,?!:;)]\s)/g,
    Component: Link,
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
//     tag: Highlight,
//     attrs: [
//       {
//         attr: 'language',
//         value: 1,
//       },
//     ],
//     className: 'preformatted',
//     pattern: /```(?:([a-z0-9-]+)(?:\s|\n))?((?:.|\n)+?)```\n?/g,
//     value: 2,
//     callback: value => ({ value: value.trim() }),
//   },
//   {
//     className: 'mention',
//     pattern: /(@[a-z0-9_]+)($|\s|[.,?!:;)])/gi,
//     value: 1,
//     after: 2,
//   },
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
