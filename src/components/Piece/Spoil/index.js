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
        <div className="spoiler-container">
          <div
            className="spoiler-header"
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '8px 4px',
            }}
            onClick={this.handleClick}
            data-id="summary"
          >
            <UilEye
              className="spoiler-icon-eye"
              style={{
                marginRight: '8px',
                height: '1.5rem',
                width: '1.5rem',
              }}
            />
            <span
              className="spoiler-title"
              style={{
                marginRight: '8px',
              }}
            >
              Spoiler
            </span>
            <UilAngleUp
              className="spoiler-icon-arrow"
              style={{
                transform: this.state.isOpen && 'rotate(180deg)',
                height: '1.5rem',
                width: '1.5rem',
              }}
            />
          </div>
          <div
            className="spoiler-content"
            style={{ display: !this.state.isOpen && 'none' }}
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
