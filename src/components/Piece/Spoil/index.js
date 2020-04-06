/*
 * Package Import
 */
import React from 'react';
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
      <div>
        <span
          style={{
            transform: this.state.isOpen && 'rotate(90deg)',
            display: 'inline-block',
            borderLeft: '5px solid',
            borderTop: '5px solid transparent',
            borderBottom: '5px solid transparent',
            marginRight: '10px',
          }}
        />
        <div
          style={{
            cursor: 'pointer',
            display: 'inline-block',
          }}
          onClick={this.handleClick}
          data-id="summary"
        >
          Spoiler
        </div>
        <div
          style={{ display: !this.state.isOpen && 'none' }}
          data-id="content"
        >
          <Format>{spoiler}</Format>
        </div>
      </div>
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
