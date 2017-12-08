/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */

/*
 * Code
 */
const Fragment = ({ replacement, values }) => (
  <replacement.Component>{values[1]}</replacement.Component>
);

/*
 * PropTypes
 */
Fragment.propTypes = {
  replacement: PropTypes.object.isRequired,
  values: PropTypes.array.isRequired,
};

/*
 * Export default
 */
export default Fragment;
