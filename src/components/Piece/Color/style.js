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
    border: '1px solid #32373c',
    borderRadius: '4px',
    content: '""',
    display: 'inline-block',
    marginLeft: '.25em',
    position: 'relative',
    top: '2px',
    height: '.9em',
    width: '.9em',
  },
}));
