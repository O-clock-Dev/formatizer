'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Format = require('../Format');

var _Format2 = _interopRequireDefault(_Format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*
                                                                                                                                                                                                                              * Package Import
                                                                                                                                                                                                                              */


/*
 * Local Import
 */


/*
 * Component
 */
var Formatizer = function Formatizer(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'div',
    { className: 'format' },
    _react2.default.createElement(
      _Format2.default,
      props,
      (typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object' ? children.join('') : children
    )
  );
};
Formatizer.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)])
};
Formatizer.defaultProps = {
  children: ''
};

/*
 * Export
 */
exports.default = Formatizer;