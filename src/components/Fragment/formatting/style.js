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
  background: 'rgba(50,55,60,0.5)',
  border: '1px solid #32373c',
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
