'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patternBlockquote = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Format = require('../../Format');

var _Format2 = _interopRequireDefault(_Format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Pattern
 */
var patternBlockquote = exports.patternBlockquote = /(?:^|\n.)>[^\n]+\n?/gm;

/*
 * Style
 */


/*
 * Local Import
 */
/*
 * Package Import
 */
var style = {
  display: 'block',
  borderLeft: '3px solid rgba(255,255,255,0.2)',
  fontStyle: 'italic',
  paddingLeft: '.7em'
};

/*
 * Component
 */
var Blockquote = function Blockquote(_ref) {
  var children = _ref.children;

  // Leave the ">"
  var value = children.slice(1);

  return _react2.default.createElement(
    'span',
    { style: style, className: 'formatizer-blockquote' },
    _react2.default.createElement(
      _Format2.default,
      null,
      value
    )
  );
};

/*
 * PropTypes
 */
Blockquote.propTypes = {
  children: _propTypes2.default.any.isRequired
};

/*
 * Export
 */
exports.default = Blockquote;