/*
 * Package Import
 */
import React, { Fragment } from 'react';
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
      <Fragment>
        <br />
        <br />
      </Fragment>
    );
  }

  // Other char
  return <Fragment>{children}</Fragment>;
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
