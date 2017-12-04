Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _extends =
  Object.assign ||
  function(target) {
    for (let i = 1; i < arguments.length; i++) {
      const source = arguments[i];
      for (const key in source) {
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

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _propTypes = require('prop-types');

const _propTypes2 = _interopRequireDefault(_propTypes);

const _style = require('./style');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*
 * Code
 */
const Fragment = function Fragment(_ref) {
  let replacement = _ref.replacement,
    values = _ref.values,
    mention = _ref.mention;
  let replace = replacement.replace,
    className = replacement.className,
    before = replacement.before,
    after = replacement.after,
    tag = replacement.tag,
    attrs = replacement.attrs,
    callback = replacement.callback;

  // Before & after

  const beforeValue = values[before] || '';
  const afterValue = values[after] || '';

  // Fragment
  const Tag = tag || _style.FragmentValue;
  const attrsValue = {};
  let fragmentValue = '';

  // Replace
  if (replace) {
    fragmentValue = replace;
  } else if (className) {
    if (className === 'mention') {
      attrsValue.mention = mention;
    }

    // Parens
    const value = typeof replacement.value === 'number' ? replacement.value : 0;
    if (attrs) {
      attrs.forEach(attribute => {
        let val = attribute.value;
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
  const hooks = (callback && callback(fragmentValue)) || {};

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
