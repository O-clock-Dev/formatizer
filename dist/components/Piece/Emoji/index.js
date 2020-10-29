'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _emojiMart = require('emoji-mart');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Local import
 */

/*
 * Components
 */
var Emoji = function Emoji(_ref) {
  var before = _ref.before,
      code = _ref.children,
      altCode = _ref.altCode;

  var title = altCode ? altCode + ' ' + code : code;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'span',
      {
        className: 'formatizer-emoji-container',
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          verticalAlign: 'middle'
        }
      },
      before,
      _react2.default.createElement('span', {
        className: 'formatizer-emoji',
        title: title,
        dangerouslySetInnerHTML: {
          __html: (0, _emojiMart.Emoji)({
            html: true,
            set: 'apple',
            emoji: code,
            fallback: function fallback(emojiFound, props) {
              return (
                // eslint-disable-next-line react/prop-types
                emojiFound ? ':' + emojiFound.short_names[0] + ':' : props.emoji
              );
            },
            size: 20
          })
        }
      })
    )
  );
};

/*
 * PropTypes
 */
/*
 * Package import
 */
Emoji.propTypes = {
  before: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  children: _propTypes2.default.string.isRequired,
  altCode: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool])
};

Emoji.defaultProps = {
  before: '',
  altCode: false
};

/*
 * Export default
 */
exports.default = Emoji;