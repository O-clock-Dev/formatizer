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

const _reactSyntaxHighlighter = require('react-syntax-highlighter');

const _reactSyntaxHighlighter2 = _interopRequireDefault(
  _reactSyntaxHighlighter,
);

const _styles = require('react-syntax-highlighter/dist/styles');

const _style = require('./style');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*
 * Code
 */
const languages = [
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
const Highlight = function Highlight(_ref) {
  let className = _ref.className,
    language = _ref.language,
    children = _ref.children;

  // Attribute Options
  const options = {
    style: _styles.atomOneDark,
    customStyle: _style.PreFormatted,
    language: languages.find(lang => lang === language),
  };

  /*
   * View
   */
  return _react2.default.createElement(
    _reactSyntaxHighlighter2.default,
    _extends({ className }, options),
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
