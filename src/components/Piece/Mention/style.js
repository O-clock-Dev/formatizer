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
  display: 'inline',
  color: '#0ac3a7',
}, ({ mention }) => {
  const styles = [];

  if (mention) {
    styles.push({ ...GeneriqueStyle, padding: '0 .25em' });
  }

  return styles;
});
