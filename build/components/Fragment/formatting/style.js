'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Link = exports.Blockquote = exports.Code = undefined;

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
  }; /* eslint-disable max-len */

/*
 * Package Import
 */

var _glamorous = require('glamorous');

/*
 * Local Import
 */

/*
 * Style
 */
var Style = {
  background: 'rgba(50,55,60,0.5)',
  border: '1px solid #32373c',
  borderRadius: '.2em',
  margin: '0 .15em',
};

var Code = (exports.Code = (0, _glamorous.code)(
  _extends({}, Style, {
    color: '#abb2bf',
    fontFamily: 'Menlo',
    padding: '.1em .3em',
    fontSize: '1.4rem',
  }),
));

var Blockquote = (exports.Blockquote = (0, _glamorous.blockquote)({
  display: 'block',
  borderLeft: '3px solid rgba(255,255,255,0.2)',
  fontStyle: 'italic',
  paddingLeft: '.7em',
  '&:last-of-type': {
    marginBottom: '.2em',
  },
}));

var Link = (exports.Link = (0, _glamorous.a)({
  textDecoration: 'underline',
  textDecorationSkip: 'ink',
}));
