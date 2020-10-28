'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patternColon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Pattern
 */
var patternColon = exports.patternColon = /(?::([+a-zA-Z0-9-]*[^{}():,\s]+):)(?::skin-tone-(\d):)?/gi;

/*
 * Components
 */


/*
 * Local import
 */
/*
 * Package import
 */
var Colon = function Colon(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _index2.default,
    null,
    children
  );
};

/*
 * PropTypes
 */
Colon.propTypes = {
  children: _propTypes2.default.string.isRequired
};

/*
 * Export default
 */
exports.default = Colon;