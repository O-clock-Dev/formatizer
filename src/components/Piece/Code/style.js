/*
 * Package Import
 */
import glamorous from 'glamorous';

/*
 * Local Import
 */
import { Chunk, CodingFont } from '../style';

/*
 * Style
 */
export const Style = glamorous.span({
  ...Chunk,
  ...CodingFont,
  color: '#abb2bf',
  fontSize: '0.825em',
  padding: '.1em .3em',
});
