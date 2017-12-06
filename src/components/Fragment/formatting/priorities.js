/*
 * Npm import
 */
import React from 'react';

/*
 * Local import
 */
import Highlight from '../../Highlight';
import { Code, Blockquote, Link } from './style';

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
    tag: Code,
    className: 'code',
    pattern: /`(.+?)`/g,
    value: 1,
  },
  {
    tag: Link,
    attrs: [
      {
        attr: 'href',
        value: 1,
      },
      {
        attr: 'target',
        value: '_blank',
      },
      {
        attr: 'rel',
        value: 'noopener noreferrer',
      },
    ],
    className: 'link',
    pattern: /(https?:\/\/(?:[^\s()]|\(.+?\))+?)($|\s|[.,?!:;)]\s)/g,
    value: 1,
    after: 2,
  },
  {
    className: 'mention',
    pattern: /(@[a-z0-9_]+)($|\s|[.,?!:;)])/gi,
    value: 1,
    after: 2,
  },
  {
    tag: Blockquote,
    className: 'quote',
    pattern: /(?:^|\n)>\s?([^\n]+)\n?/gm,
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
