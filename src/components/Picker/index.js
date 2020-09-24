/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Picker as EmojiPicker } from 'emoji-mart';

/*
 * Local Import
 */

/*
 * Component
 */
const Picker = ({ onChange }) => {
  const handleChange = (...args) => onChange(...args);
  return (
    <EmojiPicker
      onSelect={handleChange}
      set="apple"
      emojiTooltip
      title=""
    />
  );
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
