/*
 * Package Import
 */
import { span } from 'glamorous';

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

  // console.log(className);

  switch (className) {
    case 'fragment-value--bold':
      styles.push({ fontWeight: 700 });
      break;

    case 'fragment-value--italic':
      styles.push({ fontStyle: 'italic' });
      break;

    case 'fragment-value--strike':
      // eslint-disable-next-line max-len
      styles.push({ background: 'linear-gradient(to bottom, transparent 50%, #000 50%) no-repeat content-box 100% 55% / 100% 4px' });
      break;

    case 'fragment-value--mention':
      styles.push({ color: '#0ac3a7' });
      break;

    case 'fragment-value--mention--myself':
    case 'fragment-value--mention--question':
      styles.push({ color: '#0ac3a7', padding: '0 .25em' });
      break;

    default:
  }

  return styles;
});
