/*
 * Package import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import Emoji from './index';

/*
 * Pattern
 */
export const patternColon = /(?::([+a-zA-Z0-9-]*[^{}():,\s]+):)(?::skin-tone-(\d):)?/gi;

/*
 * Components
 */
const Colon = ({ children }) => <Emoji>{children}</Emoji>;

/*
 * PropTypes
 */
Colon.propTypes = {
  children: PropTypes.string.isRequired,
};

/*
 * Export default
 */
export default Colon;
