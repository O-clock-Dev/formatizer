/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */

/*
 * Style
 */
export const StyleSpoil = styled.div(({ open }) => ({
  display: !open && 'none',
}));

export const StyleSpoiler = styled.div(({ open }) => ({
  cursor: 'pointer',
  '::before': {
    transform: open && 'rotate(90deg)',
    content: '""',
    display: 'inline-block',
    borderLeft: '5px solid',
    borderTop: '5px solid transparent',
    borderBottom: '5px solid transparent',
    marginRight: '10px',
  },
}));
