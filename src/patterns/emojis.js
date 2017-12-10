/*
 * Package Import
 */

/*
 * Local Import
 */
import { Emoji } from 'src/components/Piece';

/*
 * Code
 */
const emojis = [
  {
    pattern: /(^|\s)(8-?\))($|\s)/g,
    replace: ':sunglasses:',
  },
  {
    pattern: /(^|\s)(:-?\|)($|\s)/g,
    replace: ':neutral_face:',
  },
  {
    pattern: /(^|\s)(:o\))($|\s)/g,
    replace: ':monkey_face:',
  },
  {
    pattern: /(^|\s)(=-?\))($|\s)/g,
    replace: ':grinning:',
  },
  {
    pattern: /(^|\s)(:-?d)($|\s)/gi,
    replace: ':grin:',
  },
  {
    pattern: /(^|\s)(;-?\))($|\s)/g,
    replace: ':wink:',
  },
  {
    pattern: /(^|\s)(:-?>)($|\s)/g,
    replace: ':laughing:',
  },
  {
    pattern: /(^|\s)(:-?o)($|\s)/gi,
    replace: ':open_mouth:',
  },
  {
    pattern: /(^|\s)(:-?x)($|\s)/gi,
    replace: ':no_mouth:',
  },
  {
    pattern: /(^|\s)(>:-?\()($|\s)/g,
    replace: ':angry:',
  },
  {
    pattern: /(^|\s)(:-?\))($|\s)/g,
    replace: ':slightly_smiling_face:',
  },
  {
    pattern: /(^|\s)(:-?\()($|\s)/g,
    replace: ':disappointed:',
  },
  {
    pattern: /(^|\s)(:-?[\\/])($|\s)/g,
    replace: ':confused:',
  },
  {
    pattern: /(^|\s)(:-?p)($|\s)/gi,
    replace: ':yum:',
  },
  {
    pattern: /(^|\s)(:-?\*)($|\s)/gi,
    replace: ':kiss:',
  },
  {
    pattern: /(^|\s)(:'\()($|\s)/gi,
    replace: ':cry:',
  },
  {
    pattern: /(^|\s)(D:)($|\s)/g,
    replace: ':fearful:',
  },
];

const emojiDefault = {
  Component: Emoji,
};

const patterns = emojis.map(emoji => ({
  ...emojiDefault,
  ...emoji,
}));

/*
 * Export default
 */
export default patterns;
