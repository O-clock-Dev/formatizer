/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import { Before, After, FragmentValue } from './style';

/*
 * Code
 */
const Fragment = ({ replacement, values }) => {
  const {
    replace,
    className,
    before,
    after,
    tag,
    attrs,
    callback,
  } = replacement;

  // Before & after
  const beforeValue = values[before] || '';
  const afterValue = values[after] || '';

  // Fragment
  const Tag = tag || FragmentValue;
  const attrsValue = {};
  let fragmentValue = '';

  // Replace
  if (replace) {
    fragmentValue = replace;
  }
  else if (className) {
    // Parents
    const value = typeof replacement.value === 'number' ? replacement.value : 0;
    if (attrs) {
      attrs.forEach((attribute) => {
        let val = attribute.value;
        if (typeof val === 'number') {
          val = values[val];
        }
        attrsValue[attribute.attr] = val;
      });
    }
    fragmentValue = values[value];
  }
  else {
    // What else?
    console.error('Must use `replace` or `className`', replacement);
    return false;
  }

  // Callback?
  // Get `value` and/or `className` properties
  const hooks = (callback && callback(fragmentValue)) || {};

  /*
   * View
   */
  return (
    <span className={className}>
      {beforeValue && <Before>{beforeValue}</Before>}
      <Tag className={className} {...attrsValue}>
        {hooks.value || fragmentValue}
      </Tag>
      {afterValue && <After>{afterValue}</After>}
    </span>
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
