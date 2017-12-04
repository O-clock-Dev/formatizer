Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.displayHtml = undefined;

const _typeof =
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

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _sanitizeHtml = require('sanitize-html');

const _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

const _Emoji = require('../Emoji');

const _Emoji2 = _interopRequireDefault(_Emoji);

const _index = require('./index');

const _index2 = _interopRequireDefault(_index);

const _emojis = require('./formatting/emojis');

const _emojis2 = _interopRequireDefault(_emojis);

const _priorities = require('./formatting/priorities');

const _priorities2 = _interopRequireDefault(_priorities);

const _text = require('./formatting/text');

const _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  return Array.from(arr);
} /* eslint-disable react/no-array-index-key */

/*
 * Npm import
 */

/*
 * Local import
 */
// Display

// Formatting

const allReplacements = [].concat(
  _toConsumableArray(_priorities2.default),
  _toConsumableArray(_emojis2.default),
  _toConsumableArray(_text2.default),
);

const sanitizeOptions = {
  allowedTags: [],
  allowedAttributes: [],
};

/*
 * Code
 */
const getFragments = function getFragments(replacements, message, mention) {
  let messageFragments = [message];

  // For each replacement
  replacements.forEach(replacement => {
    // Var to collect subfragments
    const subFragments = [];

    // We search in each parts
    messageFragments.forEach(messageFragment => {
      // If this is a string
      if (typeof messageFragment === 'string') {
        // Then we search for pattern
        const pattern = replacement.pattern;

        const matches = messageFragment.match(pattern);

        // Fragment in which we look for next match
        let msgFragment = messageFragment;

        // For each match, take begin, replace match by fragment, and continue
        if (matches) {
          matches.forEach(match => {
            const indexBegin = msgFragment.indexOf(match);
            const indexEnd = indexBegin + match.length;
            const messageBegin = msgFragment.slice(0, indexBegin);
            const messageEnd = msgFragment.slice(indexEnd);

            // Begin
            if (messageBegin !== '') {
              subFragments.push(messageBegin);
            }

            // Get result, reset, and transform to array
            const result = pattern.exec(match);
            pattern.lastIndex = 0;
            const values = Array.from(result);

            // Fragment
            subFragments.push(
              _react2.default.createElement(_index2.default, {
                replacement,
                values,
                mention,
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

const displayFragments = function displayFragments(fragments) {
  return fragments.map((Frag, index) => {
    if (typeof Frag === 'string') {
      // Get rid of html or XSS
      const text = (0, _sanitizeHtml2.default)(Frag, sanitizeOptions);
      // eslint-disable-next-line
      var regex = /(\:[a-zA-Z0-9-_+]+\:(\:skin-tone-[2-6]\:)?)/g;

      const arr = text.split(/([\s])+/).map(string => {
        const isMatch = string.match(regex);

        if (isMatch) {
          return _react2.default.createElement(_Emoji2.default, {
            emoji: string,
          });
        }

        return string;
      });

      return arr.map((element, elementId) => {
        const key = elementId + index;

        // If element is an object -> Element is a smiley.
        if (
          (typeof element === 'undefined' ? 'undefined' : _typeof(element)) ===
          'object'
        ) {
          return _react2.default.cloneElement(element, { key });
        }

        // Otherwise, element is a simple string -> Display it.
        const html = { __html: element };
        return _react2.default.createElement('span', {
          key,
          dangerouslySetInnerHTML: html,
        });
      });
    }
    return _react2.default.cloneElement(Frag, { key: index });
  });
};

const display = function display(replacements, message, mention) {
  // Create fragments
  const fragments = getFragments(replacements, message, mention);

  // Return
  return displayFragments(fragments);
};

/*
 * Export
 */
const displayHtml = (exports.displayHtml = function displayHtml(
  message,
  mention,
) {
  return display(allReplacements, message, mention);
});
