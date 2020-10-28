'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getFragments = require('./getFragments');

var _getFragments2 = _interopRequireDefault(_getFragments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable react/no-array-index-key */
/*
 * Package Import
 */


/*
 * Local Import
 */


/*
 * Code
 */

/*
 * Component
 */
var Format = function Format(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  // Get all Fragments
  var fragments = (0, _getFragments2.default)(children, props);

  /*
   * View
   */
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    fragments.map(function (fragment, index) {
      // If element is a string
      if (typeof fragment === 'string') {
        return _react2.default.createElement(
          _react2.default.Fragment,
          { key: index },
          fragment
        );
      }

      // Otherwise, is a Piece of Fragment.
      // Clone element to add key
      return _react2.default.cloneElement(fragment, {
        key: index
      });
    })
  );
};

/*
 * PropTypes
 */
Format.propTypes = {
  children: _propTypes2.default.string,
  mentions: _propTypes2.default.array,
  isMention: _propTypes2.default.func,
  isMentionMe: _propTypes2.default.func,
  onMention: _propTypes2.default.func,
  onMentionMe: _propTypes2.default.func,
  options: _propTypes2.default.shape({
    spoiler: _propTypes2.default.shape({
      open: _propTypes2.default.bool,
      onClick: _propTypes2.default.func
    })
  })
};

Format.defaultProps = {
  children: '',
  mentions: [],
  isMention: function isMention() {
    return true;
  },
  isMentionMe: function isMentionMe() {},
  onMention: function onMention() {},
  onMentionMe: function onMentionMe() {},
  options: {
    spoiler: {
      open: false,
      onClick: function onClick() {}
    }
  }
};

/*
 * Export
 */
exports.default = Format;