'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }; /*
                                                                                                                                                                                                                                                                   * Package Import
                                                                                                                                                                                                                                                                   */

/*
 * Local Import
 */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('./style');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*
 * Code
 */
var Fragment = function Fragment(_ref) {
  var replacement = _ref.replacement,
    values = _ref.values,
    mention = _ref.mention;
  var replace = replacement.replace,
    className = replacement.className,
    before = replacement.before,
    after = replacement.after,
    tag = replacement.tag,
    attrs = replacement.attrs,
    callback = replacement.callback;

  // Before & after

  var beforeValue = values[before] || '';
  var afterValue = values[after] || '';

  // Fragment
  var Tag = tag || _style.FragmentValue;
  var attrsValue = {};
  var fragmentValue = '';

  // Replace
  if (replace) {
    fragmentValue = replace;
  } else if (className) {
    if (className === 'mention') {
      attrsValue.mention = mention;
    }

    // Parens
    var value = typeof replacement.value === 'number' ? replacement.value : 0;
    if (attrs) {
      attrs.forEach(function(attribute) {
        var val = attribute.value;
        if (typeof val === 'number') {
          val = values[val];
        }
        attrsValue[attribute.attr] = val;
      });
    }
    fragmentValue = values[value];
  } else {
    // What else?
    console.error('Must use `replace` or `className`', replacement);
    return false;
  }

  // Callback?
  // Get `value` and/or `className` properties
  var hooks = (callback && callback(fragmentValue)) || {};

  /*
   * View
   */
  return _react2.default.createElement(
    'span',
    { className: className || hooks.className },
    _react2.default.createElement(_style.Before, null, beforeValue),
    _react2.default.createElement(
      Tag,
      _extends({ className: className || hooks.className }, attrsValue),
      hooks.value || fragmentValue,
    ),
    _react2.default.createElement(_style.After, null, afterValue),
  );
};

/*
 * PropTypes
 */
Fragment.propTypes = {
  replacement: _propTypes2.default.object.isRequired,
  values: _propTypes2.default.array.isRequired,
  mention: _propTypes2.default.bool.isRequired,
};

/*
 * Export default
 */
exports.default = Fragment;
