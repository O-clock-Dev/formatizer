'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patternCode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                   * Package Import
                                                                                                                                                                                                                                                                   */


/*
 * Local Import
 */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('../style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Pattern
 */
var patternCode = exports.patternCode = /`(.+?)\n?`/g;

/*
 * Style
 */
var style = _extends({}, _style.Chunk, _style.CodingFont, {
  color: '#abb2bf',
  padding: '.1em .3em'
});

/*
 * Component
 */
var Code = function Code(_ref) {
  var children = _ref.children;

  // Get rid of first and last `
  var value = children.slice(1, -1).trim();

  return _react2.default.createElement(
    'span',
    { className: 'formatizer-code', style: style },
    value
  );
};

/*
 * PropTypes
 */
Code.propTypes = {
  children: _propTypes2.default.any.isRequired
};

/*
 * Export
 */
exports.default = Code;