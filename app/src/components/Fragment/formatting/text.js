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
    pattern: /\*(.+?)\*($|\s|[.,?!:;)])/mg,
    value: 1,
    after: 2,
  },
  {
    className: 'italic',
    pattern: /_(.+?)_($|\s|[.,?!:;)])/mg,
    value: 1,
    after: 2,
  },
  {
    className: 'strike',
    pattern: /~(.+?)~($|\s|[.,?!:;)])/mg,
    value: 1,
    after: 2,
  },
];
