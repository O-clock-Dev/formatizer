/* eslint-disable max-len */

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

const Style = {
  background: 'rgba(50,55,60,0.5)',
  border: '1px solid #32373c',
  borderRadius: '.2em',
  margin: '0 .15em',
};

export const FragmentValue = span(
  {
    display: 'inline',
  },
  ({ className }) => {
    const styles = [];

    switch (className) {
      case 'bold':
        styles.push({ fontWeight: 700 });
        break;

      case 'italic':
        styles.push({ fontStyle: 'italic' });
        break;

      case 'strike':
        styles.push({
          background:
            'linear-gradient(to bottom, transparent 50%, #000 50%) no-repeat content-box 100% 55% / 100% 4px',
        });
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
  },
);
