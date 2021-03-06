/*
 * Package Import
 */

/*
 * Local Import
 */
import { Chunk, CodingFont } from '../style';

/*
 * Style
 */
export const customStyle = {
  ...Chunk,
  ...CodingFont,
  color: '#abb2bf',
  display: 'block',
  margin: '.2em -.2em .2em 0',
  overflow: 'auto',
  padding: '.4em .8em',
  tabSize: 2,
};

export const lineNumberContainerStyle = {
  font: 'inherit',
  float: 'left',
  margin: '0 .5em 0 0',
  opacity: '.5',
  textAlign: 'right',
};

export const codeTagProps = {
  style: { fontFamily: 'inherit' },
};
