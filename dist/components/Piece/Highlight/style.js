'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.codeTagProps = exports.lineNumberContainerStyle = exports.customStyle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                   * Package Import
                                                                                                                                                                                                                                                                   */

/*
 * Local Import
 */


var _style = require('../style');

/*
 * Style
 */
var customStyle = exports.customStyle = _extends({}, _style.Chunk, _style.CodingFont, {
  color: '#abb2bf',
  display: 'block',
  margin: '.2em -.2em .2em 0',
  overflow: 'auto',
  padding: '.4em .8em',
  tabSize: 2
});

var lineNumberContainerStyle = exports.lineNumberContainerStyle = {
  font: 'inherit',
  float: 'left',
  margin: '0 .5em 0 0',
  opacity: '.5',
  textAlign: 'right'
};

var codeTagProps = exports.codeTagProps = {
  style: { fontFamily: 'inherit' }
};