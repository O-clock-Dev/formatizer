'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patternTextFormat = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Package Import
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


/*
 * Local Import
 */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Format = require('../../Format');

var _Format2 = _interopRequireDefault(_Format);

var _Character = require('../Character');

var _Character2 = _interopRequireDefault(_Character);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Pattern
 */
var patternTextFormat = exports.patternTextFormat = /(\s|^)((?:\*.+?\*|~.+?~|_.+?_))(?=\s|$)/g;

/*
 * Get style by char
 */
var getStyle = function getStyle(char) {
  switch (char) {
    case '*':
      return {
        fontWeight: 700
      };

    case '~':
      return {
        textDecoration: 'line-through'
      };

    case '_':
      return {
        fontStyle: 'italic'
      };

    default:
      return {};
  }
};

/*
 * TextFormat
 * Remove first and last character
 */
var TextFormat = function TextFormat(_ref) {
  var children = _ref.children;

  var _patternTextFormat$ex = patternTextFormat.exec(children),
      _patternTextFormat$ex2 = _slicedToArray(_patternTextFormat$ex, 3),
      before = _patternTextFormat$ex2[1],
      format = _patternTextFormat$ex2[2];

  // Text


  var firstChar = format.slice(0, 1);
  var text = format.slice(1).slice(0, -1);

  // View
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    before && _react2.default.createElement(
      _Character2.default,
      null,
      before
    ),
    _react2.default.createElement(
      'span',
      { style: getStyle(firstChar) },
      _react2.default.createElement(
        _Format2.default,
        null,
        text
      )
    )
  );
};

/*
 * PropTypes
 */
TextFormat.propTypes = {
  children: _propTypes2.default.string.isRequired
};

/*
 * Export
 */
exports.default = TextFormat;