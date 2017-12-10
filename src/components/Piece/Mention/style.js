/*
 * Package Import
 */
import Glamorous from 'glamorous';

/*
 * Local Import
 */
import { GeneriqueStyle } from '../style';

/*
 * Style
 */
export const Style = Glamorous.span({
  color: '#0ac3a7',
});

export const StyleMention = Glamorous.span({
  ...GeneriqueStyle,
  color: '#0ac3a7',
  padding: '0 .25em',
});
