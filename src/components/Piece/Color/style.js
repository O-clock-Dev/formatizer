/*
 * Package Import
 */
import glamorous from 'glamorous';

/*
 * Local Import
 */

/*
 * Style
 */
export const Style = glamorous.span({}, ({ color }) => ({
  '::after': {
    background: color,
    border: '1px solid #323232',
    borderRadius: '3px',
    content: '""',
    display: 'inline-block',
    marginLeft: '.25em',
    position: 'relative',
    top: '2px',
    height: '.75em',
    width: '.75em',
  },
}));
