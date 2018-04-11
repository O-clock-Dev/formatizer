/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Format from 'src/components/Format';
import { StyleSpoil, Style } from './style';
/*
 * Patterns
 */
const regexp = '###(?:\\s)?((?:.|\\n)+?)###\\n?';
export const patternSpoil = new RegExp(regexp, 'g');

/*
 * Component
 */
class Spoil extends React.Component {
  state = { open: this.props.options.spoiler.open };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    const { children } = this.props;
    const { open } = this.state;

    // Never forget to reset lastIndex after a .exec()
    const matches = patternSpoil.exec(children);
    patternSpoil.lastIndex = 0;

    // Capturing paren: Text + Trim it !
    const prevCode = matches[1];
    const spoiler = prevCode[0] === '\n' ? prevCode.slice(1) : prevCode;
    return (
      <Style onClick={this.handleClick} open={open}>
        Spoiler
        <StyleSpoil open={open}>
          <Format>{spoiler}</Format>
        </StyleSpoil>
      </Style>
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
