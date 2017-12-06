'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.FragmentValue = exports.After = exports.Before = undefined;

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

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*
 * Local Import
 */

/*
 * Style
 */
var Before = (exports.Before = _glamorous2.default.span({
  display: 'inline',
}));

var After = (exports.After = _glamorous2.default.span({
  display: 'inline',
}));

var Style = {
  background: 'rgba(50,55,60,0.5)',
  border: '1px solid #32373c',
  borderRadius: '.2em',
  margin: '0 .15em',
};

var FragmentValue = (exports.FragmentValue = _glamorous2.default.span(
  {
    display: 'inline',
  },
  function(_ref) {
    var className = _ref.className,
      mention = _ref.mention;

    var styles = [];

    switch (className) {
      case 'bold':
        styles.push({ fontWeight: 700 });
        break;

      case 'italic':
        styles.push({ fontStyle: 'italic' });
        break;

      case 'strike':
        styles.push({
          background:
            'linear-gradient(to bottom, transparent 50%, #fff 50%) no-repeat content-box 100% 55%/100% 4px',
        });
        break;

      case 'mention':
        if (mention) {
          styles.push(
            _extends({}, Style, { color: '#0ac3a7', padding: '0 .25em' }),
          );
        } else {
          styles.push({ color: '#0ac3a7' });
        }
        break;

      default:
    }

    return styles;
  },
));
