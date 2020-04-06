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
export const patternColor = /(?:\B)#(?:[0-9a-f]{3}){1,2}(?=\b|$)/gi;

/*
 * Component
 */
const Color = ({ children }) => (
  <span>
    <span
      style={{
        background: children,
        borderRadius: '4px',
        content: '""',
        display: 'inline-block',
        margin: '0 0.25em',
        position: 'relative',
        top: '2px',
        height: '.9em',
        width: '.85em',
      }}
    />
    {children}
  </span>
);

/*
 * PropTypes
 */
Color.propTypes = {
  children: PropTypes.any.isRequired,
};

/*
 * Export
 */
export default Color;
