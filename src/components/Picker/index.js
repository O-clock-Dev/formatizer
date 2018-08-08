/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import EmojiPicker from 'emojione-picker';

/*
 * Local Import
 */

/*
 * Component
 */
const Picker = ({ onChange }) => {
  // Handlers
  const handleChange = (...args) => onChange(...args);

  // Render
  return <EmojiPicker search onChange={handleChange} />;
};

/*
 * PropTypes
 */
Picker.propTypes = {
  onChange: PropTypes.func.isRequired,
};

/*
 * Export
 */
export default Picker;
