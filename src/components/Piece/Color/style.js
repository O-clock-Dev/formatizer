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
    borderRadius: '5px',
    content: '""',
    display: 'block',
    marginLeft: '.25em',
    height: '.9em',
    width: '.9em',
  },
}));
