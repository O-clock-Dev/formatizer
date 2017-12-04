Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _propTypes = require('prop-types');

const _propTypes2 = _interopRequireDefault(_propTypes);

const _emojiMart = require('emoji-mart');

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
const emojiExist = function emojiExist(emoji) {
  // GetName = [':', 'emoji', ':']
  const getName = emoji.split(':');
  const newObj = Object.keys(_emojiMart.emojiIndex.emojis);
  const emojisColons = newObj.filter(obj => obj === getName[1]);
  return emojisColons;
};

/*
 * Component
 */
/*
 * Npm import
 */
const EmojiContainer = function EmojiContainer(_ref) {
  const emoji = _ref.emoji;

  const emojisColons = emojiExist(emoji);

  /*
   * View
   */
  return !emojisColons.length
    ? // If Smiley doesn't exist, return string emoji
      _react2.default.createElement('span', null, emoji)
    : // Otherwise, display Emoji
      _react2.default.createElement(_emojiMart.Emoji, {
        emoji,
        size: 21,
        set: 'emojione',
        sheetSize: 64,
        // Local
        // backgroundImageFn={(set, sheetSize) =>
        //  `../../oAssets/images/sheet_${set}_${sheetSize}.png`}

        // Remote
        backgroundImageFn: function backgroundImageFn(set, sheetSize) {
          return `https://unpkg.com/emoji-datasource-${set}@3.0.0/img/${
            set
          }/sheets/${sheetSize}.png`;
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
