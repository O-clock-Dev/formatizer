/*
 * Package Import
 */
import { span, code, blockquote } from 'glamorous';

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

export const FragmentValue = span({
  display: 'inline',
}, ({ className }) => {
  const styles = [];

  console.log(className);

  switch (className) {
    case 'bold':
      styles.push({ fontWeight: 700 });
      break;

    case 'italic':
      styles.push({ fontStyle: 'italic' });
      break;

    case 'strike':
      // eslint-disable-next-line max-len
      styles.push({ background: 'linear-gradient(to bottom, transparent 50%, #000 50%) no-repeat content-box 100% 55% / 100% 4px' });
      break;

    case 'mention':
      styles.push({ color: '#0ac3a7' });
      break;

    case 'mention--myself':
    case 'mention--question':
      styles.push({
        background: 'rgba(30, 33, 36, 0.2)',
        border: 'rgba(30, 33, 36, 0.8)',
        borderRadius: '.2em',
        color: '#0ac3a7',
        margin: '0 .15em',
        padding: '0 .25em',
      });
      break;

    default:
  }

  return styles;
});

export const Code = code({
  background: 'rgba(30, 33, 36, 0.2)',
  border: 'rgba(30, 33, 36, 0.8)',
  borderRadius: '.2em',
  color: '#abb2bf',
  fontFamily: 'Menlo',
  margin: '0 .15em',
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
