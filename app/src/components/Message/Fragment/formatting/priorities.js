/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Highlight from 'src/components/Highlight';


/*
 * Export default
 */
export default [
  {
    tag: Highlight,
    attrs: [
      {
        attr: 'language',
        value: 1,
      },
    ],
    className: 'preformatted',
    pattern: /```(?:([a-z0-9-]+)(?:\s|\n))?((?:.|\n)+?)```\n?/g,
    value: 2,
    callback: value => ({ value: value.trim() }),
  },
  {
    tag: 'code',
    className: 'code',
    pattern: /`(.+?)`/g,
    value: 1,
  },
  {
    tag: 'a',
    attrs: [
      {
        attr: 'href',
        value: 1,
      },
    ],
    className: 'link',
    pattern: /(https?:\/\/(?:[^\s()]|\(.+?\))+?)($|\s|[.,?!:;)]\s)/g,
    value: 1,
    after: 2,
  },
  {
    tag: 'blockquote',
    className: 'quote',
    pattern: /(?:^|\n)>\s?([^\n]+)\n?/mg,
    value: 1,
  },
  {
    pattern: /\n{2,}/g,
    replace: (
      <span>
        <br />
        <br />
      </span>
    ),
  },
  {
    pattern: /\n/g,
    replace: <br />,
  },
  {
    pattern: /&/g,
    replace: '&',
  },
  {
    pattern: /</g,
    replace: '<',
  },
  {
    pattern: />/g,
    replace: '>',
  },
];
