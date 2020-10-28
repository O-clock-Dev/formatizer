'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _patterns = require('../../patterns');

var _patterns2 = _interopRequireDefault(_patterns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Code
 */
/*
 * Package Import
 */
var getFragments = function getFragments(message, props) {
  var messageFragments = [message];

  // For each replacement
  _patterns2.default.forEach(function (replacement) {
    // Var to collect subfragments
    var subFragments = [];

    // We search in each parts
    messageFragments.forEach(function (messageFragment) {
      // If this is a string
      if (typeof messageFragment === 'string') {
        // Then we search for pattern
        var Component = replacement.Component,
            pattern = replacement.pattern,
            check = replacement.check;

        var matches = messageFragment.match(pattern);

        // Fragment in which we look for next match
        var msgFragment = messageFragment;

        // For each match, take begin, replace match by fragment, and continue
        if (matches) {
          matches.forEach(function (match) {
            var indexBegin = msgFragment.indexOf(match);
            var indexEnd = indexBegin + match.length;
            var messageBegin = msgFragment.slice(0, indexBegin);
            var messageEnd = msgFragment.slice(indexEnd);
            var mention = match.slice(1);

            // If there is no check, or check pass:
            // push the text before + component for the match
            if (!check || check(props, mention)) {
              // Begin
              if (messageBegin !== '') {
                subFragments.push(messageBegin);
              }

              // Fragment
              subFragments.push(_react2.default.createElement(
                Component,
                props,
                match
              ));
            } else {
              // If there is a check, but it does not pass
              // push the text before and the matching text without any component
              subFragments.push('' + messageBegin + match);
            }

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

/*
 * Export
 */


/*
 * Local Import
 */
exports.default = getFragments;