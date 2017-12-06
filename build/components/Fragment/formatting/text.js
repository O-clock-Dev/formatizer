'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = [
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
