/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */

/*
 * Pattern
 */
export const patternCharacter = /\n+/g;

/*
 * Component
 */
const Character = ({ children }) => {
  // Line
  if (children === '\n') {
    return <br />;
  }

  // Multiline
  if (children.slice(0, 1) === '\n') {
    return (
      <React.Fragment>
        <br />
        <br />
      </React.Fragment>
    );
  }

  // Other char
  return <React.Fragment>{children}</React.Fragment>;
};

/*
 * PropTypes
 */
Character.propTypes = {
  children: PropTypes.any.isRequired,
};

/*
 * Export
 */
export default Character;
