'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patternMention = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('../style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Pattern
 */
var patternMention = exports.patternMention = /(?:\B)(?:@[a-zÀ-ÿ0-9._!'-]+)/gi;

// @TODO : Mention with Space -- WIP
// export const patternMention = /(?:\B)@(?:[a-zÀ-ÿ0-9'._!-]+)\s?(?:[a-zÀ-ÿ0-9'._-]*)/gi

/*
 * Style
 */


/*
 * Local Import
 */
/*
 * Package Import
 */
var styleMention = {
  color: '#0ac3a7',
  padding: '0 .25em'
};
var style = {
  color: '#0ac3a7'
};

/*
 * Component
 */
var Mention = function Mention(_ref) {
  var children = _ref.children,
      isMentionMe = _ref.isMentionMe,
      isMention = _ref.isMention,
      onMention = _ref.onMention,
      onMentionMe = _ref.onMentionMe;

  var value = children.trim();
  var mention = value.slice(1);

  /*
   * If Mention match with my Name || 'question'
   * Return StyleMention
   */
  if (isMentionMe(mention)) {
    onMentionMe(mention);
    return _react2.default.createElement(
      'span',
      {
        style: styleMention,
        className: 'formatizer-mention formatizer-mention-me'
      },
      value
    );
  }

  /*
   * Otherwise, return basic Style
   */
  if (isMention(mention)) {
    onMention(mention);
    return _react2.default.createElement(
      'span',
      { style: style, className: 'formatizer-mention' },
      value
    );
  }

  return false;
};

/*
 * PropTypes
 */
Mention.propTypes = {
  children: _propTypes2.default.string.isRequired,
  isMention: _propTypes2.default.func.isRequired,
  isMentionMe: _propTypes2.default.func.isRequired,
  onMention: _propTypes2.default.func.isRequired,
  onMentionMe: _propTypes2.default.func.isRequired
};

/*
 * Export
 */
exports.default = Mention;