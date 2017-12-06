'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.displayHtml = undefined;

var _typeof =
  typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
    ? function(obj) {
        return typeof obj;
      }
    : function(obj) {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj;
      };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sanitizeHtml = require('sanitize-html');

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

var _Emoji = require('../Emoji');

var _Emoji2 = _interopRequireDefault(_Emoji);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _emojis = require('./formatting/emojis');

var _emojis2 = _interopRequireDefault(_emojis);

var _priorities = require('./formatting/priorities');

var _priorities2 = _interopRequireDefault(_priorities);

var _text = require('./formatting/text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
} /* eslint-disable react/no-array-index-key */

/*
 * Npm import
 */

/*
 * Local import
 */
// Display

// Formatting

var allReplacements = [].concat(
  _toConsumableArray(_priorities2.default),
  _toConsumableArray(_emojis2.default),
  _toConsumableArray(_text2.default),
);

var sanitizeOptions = {
  allowedTags: [],
  allowedAttributes: [],
};

/*
 * Code
 */
var getFragments = function getFragments(replacements, message, mention) {
  var messageFragments = [message];

  // For each replacement
  replacements.forEach(function(replacement) {
    // Var to collect subfragments
    var subFragments = [];

    // We search in each parts
    messageFragments.forEach(function(messageFragment) {
      // If this is a string
      if (typeof messageFragment === 'string') {
        // Then we search for pattern
        var pattern = replacement.pattern;

        var matches = messageFragment.match(pattern);

        // Fragment in which we look for next match
        var msgFragment = messageFragment;

        // For each match, take begin, replace match by fragment, and continue
        if (matches) {
          matches.forEach(function(match) {
            var indexBegin = msgFragment.indexOf(match);
            var indexEnd = indexBegin + match.length;
            var messageBegin = msgFragment.slice(0, indexBegin);
            var messageEnd = msgFragment.slice(indexEnd);

            // Begin
            if (messageBegin !== '') {
              subFragments.push(messageBegin);
            }

            // Get result, reset, and transform to array
            var result = pattern.exec(match);
            pattern.lastIndex = 0;
            var values = Array.from(result);

            // Fragment
            subFragments.push(
              _react2.default.createElement(_index2.default, {
                replacement: replacement,
                values: values,
                mention: mention,
              }),
            );

            // End
            msgFragment = messageEnd;
          });
        }

        // Last fragment
        if (msgFragment !== '') {
          subFragments.push(msgFragment);
        }
      } else {
        // If this not a string, this is a already a fragment. Nothing to do.
        subFragments.push(messageFragment);
      }
    });

    // subFragments is the new fragments :)
    messageFragments = subFragments;
  });

  // Return fragments
  return messageFragments;
};

var displayFragments = function displayFragments(fragments) {
  return fragments.map(function(Frag, index) {
    if (typeof Frag === 'string') {
      // Get rid of html or XSS
      var text = (0, _sanitizeHtml2.default)(Frag, sanitizeOptions);
      // eslint-disable-next-line
      var regex = /(\:[a-zA-Z0-9-_+]+\:(\:skin-tone-[2-6]\:)?)/g;

      var arr = text.split(/([\s])+/).map(function(string) {
        var isMatch = string.match(regex);

        if (isMatch) {
          return _react2.default.createElement(_Emoji2.default, {
            emoji: string,
          });
        }

        return string;
      });

      return arr.map(function(element, elementId) {
        var key = elementId + index;

        // If element is an object -> Element is a smiley.
        if (
          (typeof element === 'undefined' ? 'undefined' : _typeof(element)) ===
          'object'
        ) {
          return _react2.default.cloneElement(element, { key: key });
        }

        // Otherwise, element is a simple string -> Display it.
        var html = { __html: element };
        return _react2.default.createElement('span', {
          key: key,
          dangerouslySetInnerHTML: html,
        });
      });
    }
    return _react2.default.cloneElement(Frag, { key: index });
  });
};

var display = function display(replacements, message, mention) {
  // Create fragments
  var fragments = getFragments(replacements, message, mention);

  // Return
  return displayFragments(fragments);
};

/*
 * Export
 */
var displayHtml = (exports.displayHtml = function displayHtml(
  message,
  mention,
) {
  return display(allReplacements, message, mention);
});
