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
  const handleChange = (...args) => onChange(...args);

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
