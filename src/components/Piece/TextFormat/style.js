/*
 * Package Import
 */
import glamorous from 'glamorous';

/*
 * Style
 */
/* eslint-disable max-len */
const Bold = glamorous.span({ fontWeight: 700 });
const Strike = glamorous.span({ textDecoration: 'line-through' });
const Italic = glamorous.span({ fontStyle: 'italic' });

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
