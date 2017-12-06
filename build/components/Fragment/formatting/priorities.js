'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Highlight = require('../../Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var _style = require('./style');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*
 * Export default
 */

/*
 * Local import
 */
exports.default = [
  {
    tag: _Highlight2.default,
    attrs: [
      {
        attr: 'language',
        value: 1,
      },
    ],
    className: 'preformatted',
    pattern: /```(?:([a-z0-9-]+)(?:\s|\n))?((?:.|\n)+?)```\n?/g,
    value: 2,
    callback: function callback(value) {
      return { value: value.trim() };
    },
  },
  {
    tag: _style.Code,
    className: 'code',
    pattern: /`(.+?)`/g,
    value: 1,
  },
  {
    tag: _style.Link,
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
    className: 'mention',
    pattern: /(@[a-z0-9_]+)($|\s|[.,?!:;)])/gi,
    value: 1,
    after: 2,
  },
  {
    tag: _style.Blockquote,
    className: 'quote',
    pattern: /(?:^|\n)>\s?([^\n]+)\n?/gm,
    value: 1,
  },
  {
    pattern: /\n{2,}/g,
    replace: _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement('br', null),
      _react2.default.createElement('br', null),
    ),
  },
  {
    pattern: /\n/g,
    replace: _react2.default.createElement('br', null),
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
]; /*
     * Npm import
     */
