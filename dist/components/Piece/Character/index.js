'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patternCharacter = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Local Import
 */

/*
 * Pattern
 */
/*
 * Package Import
 */
var patternCharacter = exports.patternCharacter = /\n+/g;

/*
 * Component
 */
var Character = function Character(_ref) {
  var children = _ref.children;

  // Line
  if (children === '\n') {
    return _react2.default.createElement('br', null);
  }

  // Multiline
  if (children.slice(0, 1) === '\n') {
    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement('br', null),
      _react2.default.createElement('br', null)
    );
  }

  // Other char
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    children
  );
};

/*
 * PropTypes
 */
Character.propTypes = {
  children: _propTypes2.default.any.isRequired
};

/*
 * Export
 */
exports.default = Character;