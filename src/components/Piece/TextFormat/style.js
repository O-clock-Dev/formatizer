/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Style
 */
const Bold = styled.span({
  fontWeight: 700,
});

const Strike = styled.span({
  textDecoration: 'line-through',
});

const Italic = styled.span({
  fontStyle: 'italic',
});

/*
 * Get style by char
 */
export default (char) => {
  switch (char) {
    case '*':
      return Bold;

    case '~':
      return Strike;

    case '_':
      return Italic;

    default:
      return 'span';
  }
};
