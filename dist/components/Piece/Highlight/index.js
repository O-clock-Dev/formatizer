'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patternHighlight = undefined;

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

var _reactUnicons = require('@iconscout/react-unicons');

var _reactSyntaxHighlighter = require('react-syntax-highlighter');

var _reactSyntaxHighlighter2 = _interopRequireDefault(_reactSyntaxHighlighter);

var _styles = require('react-syntax-highlighter/dist/styles');

var _style = require('./style');

var _languages = require('./languages');

var _languages2 = _interopRequireDefault(_languages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Patterns
 */
/* eslint-disable prefer-template */
var regexp = '```(?:(' + _languages2.default.join('|') + ')\\s)?((?:.|\\n)+?)```\\n?';
var patternHighlight = exports.patternHighlight = new RegExp(regexp, 'g');

/*
 * Component
 */
var Highlight = function Highlight(_ref) {
  var children = _ref.children;

  // Never forget to reset lastIndex after a .exec()
  var matches = patternHighlight.exec(children);
  patternHighlight.lastIndex = 0;

  // Highlighter options
  var options = {
    style: _styles.atomOneDark,
    customStyle: _style.customStyle,
    codeTagProps: _style.codeTagProps
  };

  // First capturing paren: language
  if (matches[1]) {
    options.language = matches[1];
  }

  // Second capturing paren: code + trim it
  var prevCode = matches[2];
  var code = prevCode[0] === '\n' ? prevCode.slice(1) : prevCode;

  // Line Numbers
  var lines = code.trim().split(/\r\n|\r|\n/).length;
  if (lines > 1) {
    options.showLineNumbers = true;
    options.lineNumberContainerStyle = _style.lineNumberContainerStyle;
  }
  /*
   * state
   */

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  /*
   * Handlers
   */


  var handleClick = function handleClick() {
    setOpen(!isOpen);
  };

  // View
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'div',
      { className: 'snippet-container' },
      _react2.default.createElement(
        'div',
        {
          className: 'snippet-header',
          style: {
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '8px 4px'
          },
          onClick: handleClick,
          'data-id': 'summary'
        },
        _react2.default.createElement(_reactUnicons.UilArrow, {
          className: 'snippet-icon-code',
          style: {
            marginRight: '8px',
            height: '1.5rem',
            width: '1.5rem'
          }
        }),
        _react2.default.createElement(
          'span',
          {
            className: 'snippet-title',
            style: {
              marginRight: '8px'
            }
          },
          'Smippet'
        ),
        _react2.default.createElement(_reactUnicons.UilAngleUp, {
          className: 'snippet-icon-arrow',
          style: {
            transform: isOpen && 'rotate(180deg)',
            height: '1.5rem',
            width: '1.5rem'
          }
        })
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'snippet-content',
          style: { display: !isOpen && 'none' },
          'data-id': 'content'
        },
        _react2.default.createElement(
          _reactSyntaxHighlighter2.default,
          options,
          code
        ),
        ';'
      )
    )
  );
};

/*
 * PropTypes
 */
Highlight.propTypes = {
  children: _propTypes2.default.string.isRequired
};

/*
 * Export
 */
exports.default = Highlight;