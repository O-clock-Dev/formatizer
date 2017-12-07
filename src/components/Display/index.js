/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import Fragments from 'src/components/Fragments';
import getFragments from 'src/components/Fragments/getFragments';

/*
 * Components
 */
const Display = ({ message }) => {
  // Create fragments
  const fragments = getFragments(message);

  return <Fragments fragments={fragments} />;
};

/*
 * PropTypes
 */
Display.propTypes = {
  message: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Display;
