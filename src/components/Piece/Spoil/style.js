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
export const StyleSpoil = glamorous.div(({ open }) => ({
  display: !open && 'none',
}));

export const StyleSpoiler = glamorous.div(({ open }) => ({
  '::before': {
    transform: open && 'rotate(90deg)',
    content: '""',
    display: 'inline-block',
    borderLeft: '5px solid',
    borderTop: '5px solid transparent',
    borderBottom: '5px solid transparent',
    marginRight: '5px',
  },
}));
