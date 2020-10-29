'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patternSpoil = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactUnicons = require('@iconscout/react-unicons');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Format = require('../../Format');

var _Format2 = _interopRequireDefault(_Format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Package Import
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/*
 * Local Import
 */


/*
 * Patterns
 */
var regexp = '###(?:\\s)?((?:.|\\n)+?)###\\n?';
var patternSpoil = exports.patternSpoil = new RegExp(regexp, 'g');

/*
 * Component
 */

var Spoil = function (_React$Component) {
  _inherits(Spoil, _React$Component);

  function Spoil() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Spoil);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Spoil.__proto__ || Object.getPrototypeOf(Spoil)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: _this.props.options.spoiler.open,
      onClick: _this.props.options.spoiler.onClick
    }, _this.handleClick = function (evt) {
      _this.setState(function (prevState) {
        return { isOpen: !prevState.isOpen };
      });

      if (_this.state.onClick) {
        _this.state.onClick(evt);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /*
   * State
   */


  /*
   * Handlers
   */


  _createClass(Spoil, [{
    key: 'render',


    /*
     * Render
     */
    value: function render() {
      // Never forget to reset lastIndex after a .exec()
      var matches = patternSpoil.exec(this.props.children);
      patternSpoil.lastIndex = 0;

      // Capturing paren: Text + Trim it !
      var prevCode = matches[1];
      var spoiler = prevCode[0] === '\n' ? prevCode.slice(1) : prevCode;

      /*
       * View
       */
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'div',
          {
            className: 'spoiler-container',
            style: {
              border: '1px solid',
              borderRadius: '8px'
            }
          },
          _react2.default.createElement(
            'div',
            {
              className: 'spoiler-header',
              style: {
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '4px 8px'
              },
              onClick: this.handleClick,
              'data-id': 'summary'
            },
            _react2.default.createElement(
              'div',
              {
                className: 'spoiler-icon-container',
                style: {
                  borderRadius: '24px',
                  height: '2em',
                  width: '2em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '6px'
                }
              },
              _react2.default.createElement(_reactUnicons.UilEye, {
                className: 'spoiler-icon-eye',
                style: {
                  height: '1.25em',
                  width: '1.25em'
                }
              })
            ),
            _react2.default.createElement(
              'span',
              {
                className: 'spoiler-title',
                style: {
                  marginRight: '4px'
                }
              },
              'Spoiler'
            ),
            _react2.default.createElement(_reactUnicons.UilAngleUp, {
              className: 'spoiler-icon-arrow',
              style: {
                transform: this.state.isOpen && 'rotate(180deg)',
                height: '1.5em',
                width: '1.5em'
              }
            })
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'spoiler-content',
              style: {
                display: !this.state.isOpen && 'none',
                padding: '8px 12px',
                borderTop: '1px solid'
              },
              'data-id': 'content'
            },
            _react2.default.createElement(
              _Format2.default,
              null,
              spoiler
            )
          )
        )
      );
    }
  }]);

  return Spoil;
}(_react2.default.Component);

/*
 * PropTypes
 */


Spoil.propTypes = {
  children: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object.isRequired
};

/*
 * Export
 */
exports.default = Spoil;