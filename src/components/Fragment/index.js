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
  const { Component, value, attrs } = replacement;

  console.log('replacement', replacement);
  console.log('values', values);

  let allAttrs = {};

  if (attrs) {
    attrs.forEach((attr) => {
      allAttrs = { ...allAttrs, [attr.name]: values[attr.value] };
    });
  }

  console.log('attrs', attrs);
  console.log('allAttrs', allAttrs);

  return (
    <Component {...allAttrs}>
      {values[value]}
    </Component>
  );
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
