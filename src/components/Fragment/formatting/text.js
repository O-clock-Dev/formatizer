/*
 * Npm import
 */
// import React from 'react';

/*
 * Export default
 */
export default [
  {
    className: 'bold',
    pattern: /\*(.+?)\*($|\s|[.,?!:;)])/gm,
    value: 1,
    after: 2,
  },
  {
    className: 'italic',
    pattern: /_(.+?)_($|\s|[.,?!:;)])/gm,
    value: 1,
    after: 2,
  },
  {
    className: 'strike',
    pattern: /~(.+?)~($|\s|[.,?!:;)])/gm,
    value: 1,
    after: 2,
  },
];
