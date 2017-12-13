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
// @TODO, get rid of <span>s with React 16.2
const Character = ({ children }) => {
  // Line
  if (children === '\n') {
    return <br />;
  }

  // Multiline
  if (children.slice(0, 1) === '\n') {
    return (
      <span>
        <br />
        <br />
      </span>
    );
  }

  // Other char
  return <span>{children}</span>;
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
