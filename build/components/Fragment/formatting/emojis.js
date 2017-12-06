'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }; /*
                                                                                                                                                                                                                                                                   * Npm import
                                                                                                                                                                                                                                                                   */

/*
 * Local import
 */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Emoji = require('../../Emoji');

var _Emoji2 = _interopRequireDefault(_Emoji);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*
 * Code
 */
var emojis = [
  {
    pattern: /(^|\s)(8-?\))($|\s)/g,
    replace: ':sunglasses:',
  },
  {
    pattern: /(^|\s)(:-?\|)($|\s)/g,
    replace: ':neutral_face:',
  },
  {
    pattern: /(^|\s)(:o\))($|\s)/g,
    replace: ':monkey_face:',
  },
  {
    pattern: /(^|\s)(=-?\))($|\s)/g,
    replace: ':grinning:',
  },
  {
    pattern: /(^|\s)(:-?d)($|\s)/gi,
    replace: ':grin:',
  },
  {
    pattern: /(^|\s)(;-?\))($|\s)/g,
    replace: ':wink:',
  },
  {
    pattern: /(^|\s)(:-?>)($|\s)/g,
    replace: ':laughing:',
  },
  {
    pattern: /(^|\s)(:-?o)($|\s)/gi,
    replace: ':open_mouth:',
  },
  {
    pattern: /(^|\s)(:-?x)($|\s)/gi,
    replace: ':no_mouth:',
  },
  {
    pattern: /(^|\s)(>:-?\()($|\s)/g,
    replace: ':angry:',
  },
  {
    pattern: /(^|\s)(:-?\))($|\s)/g,
    replace: ':slightly_smiling_face:',
  },
  {
    pattern: /(^|\s)(:-?\()($|\s)/g,
    replace: ':disappointed:',
  },
  {
    pattern: /(^|\s)(:-?[\\/])($|\s)/g,
    replace: ':confused:',
  },
  {
    pattern: /(^|\s)(:-?p)($|\s)/gi,
    replace: ':yum:',
  },
  {
    pattern: /(^|\s)(:-?\*)($|\s)/gi,
    replace: ':kiss:',
  },
  {
    pattern: /(^|\s)(:'\()($|\s)/gi,
    replace: ':cry:',
  },
  {
    pattern: /(^|\s)(D:)($|\s)/g,
    replace: ':fearful:',
  },
];

var emojiDefault = {
  before: 1,
  value: 2,
  after: 3,
  callback: function callback(emoji) {
    return {
      value: _react2.default.createElement(_Emoji2.default, { emoji: emoji }),
    };
  },
};

var emojiFormatting = emojis.map(function(emoji) {
  return _extends({}, emojiDefault, emoji);
});

/*
 * Export default
 */
exports.default = emojiFormatting;
