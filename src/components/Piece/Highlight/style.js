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
  margin: '.2em .15em',
  overflow: 'auto',
  padding: '.4em .8em',
  tabSize: 2,
};

export const lineNumberContainerStyle = {
  font: 'inherit',
  float: 'left',
  margin: '.1em .5em .1em 0',
};

export const codeTagProps = {
  style: { fontFamily: 'inherit' },
};
