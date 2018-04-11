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

const arrowRight = {
  content: '""',
  display: 'inline-block',
  borderLeft: '5px solid black',
  borderTop: '5px solid transparent',
  borderBottom: '5px solid transparent',
  marginRight: '5px',
};

const arrowDown = {
  content: '""',
  display: 'inline-block',
  borderTop: '5px solid black',
  borderRight: '5px solid transparent',
  borderLeft: '5px solid transparent',
  marginRight: '5px',
};

export const Style = glamorous.div(({ open }) => ({
  '::before': open ? arrowDown : arrowRight,
}));
