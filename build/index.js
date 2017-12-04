Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _propTypes = require('prop-types');

const _propTypes2 = _interopRequireDefault(_propTypes);

const _display = require('./components/Fragment/display');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*
 * Component
 */
const Format = function Format(_ref) {
  let className = _ref.className,
    children = _ref.children,
    mention = _ref.mention;
  return _react2.default.createElement(
    'div',
    { className },
    (0, _display.displayHtml)(children, mention),
  );
};

/*
 * PropTypes
 */

/*
 * Local Import
 */
/*
 * Package Import
 */
Format.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.string,
  mention: _propTypes2.default.bool,
};

Format.defaultProps = {
  className: '',
  children: '',
  mention: false,
};

/*
 * Export
 */
exports.default = Format;
