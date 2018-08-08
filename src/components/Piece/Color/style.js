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
export const Style = styled.span({}, ({ color }) => ({
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
    width: '.85em',
  },
}));
