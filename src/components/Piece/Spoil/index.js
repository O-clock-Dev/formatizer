/*
 * Package Import
 */
import React from 'react';
import { UilAngleUp, UilEye } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Format from 'src/components/Format';

/*
 * Patterns
 */
const regexp = '###(?:\\s)?((?:.|\\n)+?)###\\n?';
export const patternSpoil = new RegExp(regexp, 'g');

/*
 * Component
 */
class Spoil extends React.Component {
  /*
   * State
   */
  state = {
    isOpen: this.props.options.spoiler.open,
    onClick: this.props.options.spoiler.onClick,
  };

  /*
   * Handlers
   */
  handleClick = (evt) => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));

    if (this.state.onClick) {
      this.state.onClick(evt);
    }
  };

  /*
   * Render
   */
  render() {
    // Never forget to reset lastIndex after a .exec()
    const matches = patternSpoil.exec(this.props.children);
    patternSpoil.lastIndex = 0;

    // Capturing paren: Text + Trim it !
    const prevCode = matches[1];
    const spoiler = prevCode[0] === '\n' ? prevCode.slice(1) : prevCode;

    /*
     * View
     */
    return (
      <React.Fragment>
        <div
          className="spoiler-container"
          style={{
            border: '1px solid',
            borderRadius: '8px',
          }}
        >
          <div
            className="spoiler-header"
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px 8px',
            }}
            onClick={this.handleClick}
            data-id="summary"
          >
            <div
              className="spoiler-icon-container"
              style={{
                borderRadius: '24px',
                height: '2em',
                width: '2em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '6px',
              }}
            >
              <UilEye
                className="spoiler-icon-eye"
                style={{
                  height: '1.25em',
                  width: '1.25em',
                }}
              />
            </div>
            <span
              className="spoiler-title"
              style={{
                marginRight: '4px',
              }}
            >
              Spoiler
            </span>
            <UilAngleUp
              className="spoiler-icon-arrow"
              style={{
                transform: this.state.isOpen && 'rotate(180deg)',
                height: '1.5em',
                width: '1.5em',
              }}
            />
          </div>
          <div
            className="spoiler-content"
            style={{
              display: !this.state.isOpen && 'none',
              padding: '8px 12px',
              borderTop: '1px solid',
            }}
            data-id="content"
          >
            <Format>{spoiler}</Format>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

/*
 * PropTypes
 */
Spoil.propTypes = {
  children: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
};

/*
 * Export
 */
export default Spoil;
