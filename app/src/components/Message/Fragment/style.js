/* eslint-disable max-len */

/*
 * Package Import
 */
import { span, code, blockquote, a } from 'glamorous';


/*
 * Local Import
 */


/*
 * Style
 */
export const Before = span({
  display: 'inline',
});

export const After = span({
  display: 'inline',
});

const Style = {
  background: 'rgba(30, 33, 36, 0.9)',
  border: 'rgba(30, 33, 36, 0.8)',
  borderRadius: '.2em',
  margin: '0 .15em',
};

export const FragmentValue = span({
  display: 'inline',
}, ({ className }) => {
  const styles = [];

  switch (className) {
    case 'bold':
      styles.push({ fontWeight: 700 });
      break;

    case 'italic':
      styles.push({ fontStyle: 'italic' });
      break;

    case 'strike':
      styles.push({ background: 'linear-gradient(to bottom, transparent 50%, #000 50%) no-repeat content-box 100% 55% / 100% 4px' });
      break;

    case 'mention':
      styles.push({ color: '#0ac3a7' });
      break;

    case 'mention--myself':
    case 'mention--question':
      styles.push({ ...Style, color: '#0ac3a7', padding: '0 .25em' });
      break;

    default:
  }

  return styles;
});

export const Code = code({
  ...Style,
  color: '#abb2bf',
  fontFamily: 'Menlo',
  padding: '.1em .3em',
  fontSize: '1.4rem',
});

export const Blockquote = blockquote({
  display: 'block',
  borderLeft: '3px solid rgba(#FFF, .2)',
  fontStyle: 'italic',
  paddingLeft: '.7em',
  '&:last-of-type': {
    marginBottom: '.2em',
  },
});

export const Link = a({
  background: 'linear-gradient(to bottom, transparent 50%, #000 50%) no-repeat content-box 0% 90% / 100% 2px',
  textShadow: '-2px -1px #FFF, -2px 0 #FFF, -2px 1px #FFF, -1px -1px #FFF, -1px 0 #FFF, -1px 1px #FFF, 0 -1px #FFF, 0 1px #FFF, 1px -1px #FFF, 1px 0 #FFF, 1px 1px #FFF, 2px -1px #FFF, 2px 0 #FFF, 2px 1px #FFF',
  // .course-chat-message--teacher &
  //   background-underline-color: $raw-light
});
