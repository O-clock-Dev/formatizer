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
const Fragment = ({ replacement, values }) => {
  console.log('replacement', replacement);
  console.log('values', values);
  // Destructuration
  const { Component, value, attrs, replace } = replacement;

  // Variable
  let allAttrs = {};
  let componentValue = values[value];

  // Replace
  if (replace) {
    componentValue = replace;
  }

  // Attributes
  if (attrs) {
    attrs.forEach((attribute) => {
      allAttrs = { ...allAttrs, [attribute.name]: values[attribute.value] };
    });
  }

  return <Component {...allAttrs}>{componentValue}</Component>;
};

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
