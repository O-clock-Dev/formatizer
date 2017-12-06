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

var _reactSyntaxHighlighter = require('react-syntax-highlighter');

var _reactSyntaxHighlighter2 = _interopRequireDefault(_reactSyntaxHighlighter);

var _styles = require('react-syntax-highlighter/dist/styles');

var _style = require('./style');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*
 * Code
 */
var languages = [
  'apache',
  'apacheconf',
  'bash',
  'sh',
  'zsh',
  'css',
  'xml',
  'html',
  'xhtml',
  'rss',
  'atom',
  'xjb',
  'xsd',
  'xsl',
  'plist',
  'ini',
  'json',
  'javascript',
  'js',
  'jsx',
  'less',
  'markdown',
  'md',
  'mkdown',
  'mkd',
  'php',
  'scss',
  'sql',
  'stylus',
  'styl',
  'twig',
];

/*
 * Component
 */
var Highlight = function Highlight(_ref) {
  var className = _ref.className,
    language = _ref.language,
    children = _ref.children;

  // Attribute Options
  var options = {
    style: _styles.atomOneDark,
    customStyle: _style.PreFormatted,
    language: languages.find(function(lang) {
      return lang === language;
    }),
  };

  /*
   * View
   */
  return _react2.default.createElement(
    _reactSyntaxHighlighter2.default,
    _extends({ className: className }, options),
    children,
  );
};

/*
 * PropTypes
 */
Highlight.propTypes = {
  className: _propTypes.PropTypes.string.isRequired,
  children: _propTypes.PropTypes.string.isRequired,
  language: _propTypes.PropTypes.string,
};

Highlight.defaultProps = {
  language: '',
};

/*
 * Export
 */
exports.default = Highlight;
