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
 * Local Import
 */

/*
 * Component
 */
var Picker = function Picker(_ref) {
  var onChange = _ref.onChange;

  var handleChange = function handleChange() {
    return onChange.apply(undefined, arguments);
  };
  return _react2.default.createElement(_emojiMart.Picker, {
    onSelect: handleChange,
    set: 'apple',
    emojiTooltip: true,
    title: ''
  });
};

/*
 * PropTypes
 */
/*
 * Package Import
 */
Picker.propTypes = {
  onChange: _propTypes2.default.func.isRequired
};

/*
 * Export
 */
exports.default = Picker;