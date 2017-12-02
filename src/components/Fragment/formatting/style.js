/* eslint-disable max-len */

/*
 * Package Import
 */
import { code, blockquote, a } from 'glamorous';

/*
 * Local Import
 */

/*
 * Style
 */
const Style = {
  background: 'rgba(30, 33, 36, 0.9)',
  border: 'rgba(30, 33, 36, 0.8)',
  borderRadius: '.2em',
  margin: '0 .15em',
};

export const Code = code({
  ...Style,
  color: '#abb2bf',
  fontFamily: 'Menlo',
  padding: '.1em .3em',
  fontSize: '1.4rem',
});

export const Blockquote = blockquote({
  display: 'block',
  borderLeft: '3px solid rgba(255,255,255,0.2)',
  fontStyle: 'italic',
  paddingLeft: '.7em',
  '&:last-of-type': {
    marginBottom: '.2em',
  },
});

export const Link = a({
  textDecoration: 'underline',
  textDecorationSkip: 'ink',
});
