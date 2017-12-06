'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _emojiMart = require('emoji-mart');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*
 * Local import
 */

/*
 * Code
 * -- Test if Emoji's props matchs with smiley database
 */
var emojiExist = function emojiExist(emoji) {
  // GetName = [':', 'emoji', ':']
  var getName = emoji.split(':');
  var newObj = Object.keys(_emojiMart.emojiIndex.emojis);
  var emojisColons = newObj.filter(function(obj) {
    return obj === getName[1];
  });
  return emojisColons;
};

/*
 * Component
 */
/*
 * Npm import
 */
var EmojiContainer = function EmojiContainer(_ref) {
  var emoji = _ref.emoji;

  var emojisColons = emojiExist(emoji);

  /*
   * View
   */
  return !emojisColons.length
    ? // If Smiley doesn't exist, return string emoji
      _react2.default.createElement('span', null, emoji)
    : // Otherwise, display Emoji
      _react2.default.createElement(_emojiMart.Emoji, {
        emoji: emoji,
        size: 21,
        set: 'emojione',
        sheetSize: 64,
        // Local
        // backgroundImageFn={(set, sheetSize) =>
        //  `../../oAssets/images/sheet_${set}_${sheetSize}.png`}

        // Remote
        backgroundImageFn: function backgroundImageFn(set, sheetSize) {
          return (
            'https://unpkg.com/emoji-datasource-' +
            set +
            '@3.0.0/img/' +
            set +
            '/sheets/' +
            sheetSize +
            '.png'
          );
        },
      });
};

/*
 * PropTypes
 */
EmojiContainer.propTypes = {
  emoji: _propTypes2.default.string.isRequired,
};

/*
 * Export
 */
exports.default = EmojiContainer;
