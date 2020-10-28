'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patternLinkMarkdown = exports.patternLink = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* eslint-disable max-len */
/*
 * Package Import
 */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Local Import
 */

/*
 * Pattern
 */

// 1. Protocol : http, https, ftp or atom
// 2. www. or not
// 3. Domain : mydomaine.com, oclock.io, localhost, ... or teletype
// 4. ...rest of the query
var patternLink = exports.patternLink = /(?:https?|atom|ftp):\/\/(?:www\.)?(?:(?:localhost|teletype)?(?=\/)|[-a-zA-Z0-9@:%._+~#=]{1,256}[.:][a-zA-Z0-9]{1,6}\b)(?:\/[-a-zA-Z0-9@:%_+?.,~#?&()/=]*)?/g;

// Regex to match markdown links
var patternLinkMarkdown = exports.patternLinkMarkdown = /\[([^[]+)\]\(([a-zA-Z0-9@:%_+?.,~#?&()/=-]+)\)/g;

/*
 * Style
 */
var style = {
  textDecoration: 'underline',
  textUnderlinePosition: 'under'
};

/*
 * Component
 */
var Link = function Link(_ref) {
  var children = _ref.children;

  var matches = patternLinkMarkdown.exec(children);
  patternLinkMarkdown.lastIndex = 0;

  if (matches) {
    var _matches = _slicedToArray(matches, 3),
        label = _matches[1],
        link = _matches[2];

    return _react2.default.createElement(
      'a',
      { style: style, href: link, target: '_blank', rel: 'noopener noreferrer' },
      label
    );
  }

  // @TODO : Voir pour refaire cette partie plus proprement.
  // Intégrer directement la partie avec le slice dans la régex
  var last = children.slice(-1);

  if (last === '.' || last === ',') {
    var _link = children.slice(0, -1);

    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(
        'a',
        { style: style, href: _link, target: '_blank', rel: 'noopener noreferrer' },
        _link
      ),
      last
    );
  }

  return _react2.default.createElement(
    'a',
    { style: style, href: children, target: '_blank', rel: 'noopener noreferrer' },
    children
  );
};

/*
 * PropTypes
 */
Link.propTypes = {
  children: _propTypes2.default.string.isRequired
};

/*
 * Export
 */
exports.default = Link;