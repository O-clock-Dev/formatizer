/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { Chunk } from '../style';

/*
 * Style
 */
export const Style = styled.span({
  color: '#0ac3a7',
});

export const StyleMention = styled.span({
  ...Chunk,
  color: '#0ac3a7',
  padding: '0 .25em',
});
