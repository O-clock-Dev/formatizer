'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Spoil = require('./components/Piece/Spoil');

var _Spoil2 = _interopRequireDefault(_Spoil);

var _Highlight = require('./components/Piece/Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var _Code = require('./components/Piece/Code');

var _Code2 = _interopRequireDefault(_Code);

var _Blockquote = require('./components/Piece/Blockquote');

var _Blockquote2 = _interopRequireDefault(_Blockquote);

var _Link = require('./components/Piece/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Mention = require('./components/Piece/Mention');

var _Mention2 = _interopRequireDefault(_Mention);

var _Color = require('./components/Piece/Color');

var _Color2 = _interopRequireDefault(_Color);

var _TextFormat = require('./components/Piece/TextFormat');

var _TextFormat2 = _interopRequireDefault(_TextFormat);

var _colon = require('./components/Piece/Emoji/colon');

var _colon2 = _interopRequireDefault(_colon);

var _smiley = require('./components/Piece/Emoji/smiley');

var _smiley2 = _interopRequireDefault(_smiley);

var _Character = require('./components/Piece/Character');

var _Character2 = _interopRequireDefault(_Character);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Export
 */
exports.default = [
// Priorities
{
  pattern: _Spoil.patternSpoil,
  Component: _Spoil2.default
}, {
  pattern: _Highlight.patternHighlight,
  Component: _Highlight2.default
}, {
  pattern: _Code.patternCode,
  Component: _Code2.default
}, {
  pattern: _Blockquote.patternBlockquote,
  Component: _Blockquote2.default
}, {
  pattern: _Link.patternLinkMarkdown,
  Component: _Link2.default
}, {
  pattern: _Link.patternLink,
  Component: _Link2.default
}, {
  pattern: _Color.patternColor,
  Component: _Color2.default
}, {
  pattern: _Mention.patternMention,
  Component: _Mention2.default,
  check: function check(props, value) {
    return props.isMention(value) || props.isMentionMe(value);
  }
},

// Text
{
  pattern: _TextFormat.patternTextFormat,
  Component: _TextFormat2.default
},

// Emojis
{
  pattern: _colon.patternColon,
  Component: _colon2.default
}, {
  pattern: _smiley.patternSmiley,
  Component: _smiley2.default
},

// Character
{
  pattern: _Character.patternCharacter,
  Component: _Character2.default
}];

// Character


// Emoji


// Text
/*
 * Local Import
 */

// Priorities