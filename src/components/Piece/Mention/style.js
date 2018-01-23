/*
 * Package Import
 */
import glamorous from 'glamorous';

/*
 * Local Import
 */
import { Chunk } from '../style';

/*
 * Style
 */
export const Style = glamorous.span({
  color: '#0ac3a7',
});

export const StyleMention = glamorous.span({
  ...Chunk,
  color: '#0ac3a7',
  padding: '0 .25em',
});
