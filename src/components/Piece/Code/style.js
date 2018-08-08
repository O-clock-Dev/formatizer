/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { Chunk, CodingFont } from '../style';

/*
 * Style
 */
export const Style = styled.span({
  ...Chunk,
  ...CodingFont,
  color: '#abb2bf',
  padding: '.1em .3em',
});
