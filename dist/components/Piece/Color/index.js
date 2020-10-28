'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patternColor = undefined;

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
var patternColor = exports.patternColor = /(?:\B)#(?:[0-9a-f]{3}){1,2}(?=\b|$)/gi;

/*
 * Component
 */
var Color = function Color(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement('span', {
      style: {
        background: children,
        borderRadius: '4px',
        content: '""',
        display: 'inline-block',
        margin: '0 0.25em',
        position: 'relative',
        top: '2px',
        height: '.9em',
        width: '.85em'
      }
    }),
    children
  );
};

/*
 * PropTypes
 */
Color.propTypes = {
  children: _propTypes2.default.any.isRequired
};

/*
 * Export
 */
exports.default = Color;