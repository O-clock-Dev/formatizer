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

// @TODO
export const Details = glamorous.details({});
export const Summary = glamorous.summary({});
export const StyleSpoil = glamorous.div(({ open }) => ({
  display: !open && 'none',
}));
export const Style = glamorous.div({});
