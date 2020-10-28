'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patternSmiley = exports.smileyStr = exports.smileyReplace = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Character = require('../Character');

var _Character2 = _interopRequireDefault(_Character);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Data
 */


/*
 * Local import
 */
/* eslint-disable max-len */

/*
 * Package import
 */
var smileyToColon = {
  '8)': ':sunglasses:',
  '8-)': ':sunglasses:',
  ':|': ':neutral_face:',
  ':-|': ':neutral_face:',
  '=)': ':grinning:',
  '=-)': ':grinning:',
  ';)': ':wink:',
  ';-)': ':wink:',
  ':>': ':laughing:',
  ':->': ':laughing:',
  '>:(': ':angry:',
  '>:-(': ':angry:',
  ':)': ':slightly_smiling_face:',
  ':-)': ':slightly_smiling_face:',
  ':(': ':disappointed:',
  ':-(': ':disappointed:',
  ':/': ':confused:',
  ':-/': ':confused:',
  ':\\': ':confused:',
  ':-\\': ':confused:',
  ':o)': ':monkey_face:',
  ':d': ':grin:',
  ':-d': ':grin:',
  ':D': ':grin:',
  ':-D': ':grin:',
  ':o': ':open_mouth:',
  ':-o': ':open_mouth:',
  ':O': ':open_mouth:',
  ':-O': ':open_mouth:',
  ':x': ':no_mouth:',
  ':-x': ':no_mouth:',
  ':X': ':no_mouth:',
  ':-X': ':no_mouth:',
  ':p': ':yum:',
  ':-p': ':yum:',
  ':P': ':yum:',
  ':-P': ':yum:',
  ':*': ':kiss:',
  ':-*': ':kiss:',
  ":'(": ':cry:'
};

/**
 * Smiley to replace
 * @param  {String} smiley
 * @return {String}
 */
var smileyReplace = exports.smileyReplace = function smileyReplace(smiley) {
  return smileyToColon[smiley];
};

/*
 * Pattern
 */
var smileyStr = exports.smileyStr = "(8-?\\)|:-?\\||:o\\)|=-?\\)|;-?\\)|:-?>|>:-?\\(|:-?\\)|:-?\\(|:-?\\/|:-?\\\\|:-?d|:-?o|:-?x|:-?p|:-?\\*|:'\\()";
var patternSmiley = exports.patternSmiley = new RegExp(smileyStr, 'gi');

/*
 * Components
 */
var Smiley = function Smiley(_ref) {
  var code = _ref.children;

  var before = '';
  var emoji = code;

  // Smiley ?
  var matches = patternSmiley.exec(code);
  patternSmiley.lastIndex = 0;

  if (matches) {
    before = !!matches[2] && _react2.default.createElement(
      _Character2.default,
      null,
      matches[2]
    );
    emoji = matches[1].replace(patternSmiley, smileyReplace).replace(/\n{2,}/g, '<br /><br />').replace(/\n/g, '<br />');
  }

  return _react2.default.createElement(
    _index2.default,
    { before: before, altCode: emoji !== code ? code : false },
    emoji
  );
};

/*
 * PropTypes
 */
Smiley.propTypes = {
  children: _propTypes2.default.string.isRequired
};

/*
 * Export default
 */
exports.default = Smiley;