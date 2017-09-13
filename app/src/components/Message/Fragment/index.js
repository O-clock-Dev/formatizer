/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/*
 * Local Import
 */


/*
 * Code
 */
const Fragment = ({ replacement, values }) => {
  // eslint-disable-next-line max-len
  const { replace, className, before, after, tag, attrs, callback } = replacement;

  // Before & after
  const beforeValue = values[before] || '';
  const afterValue = values[after] || '';

  // Fragment
  const Tag = tag || 'span';
  const attrsValue = {};
  let fragmentValue = '';

  // Replace
  if (replace) {
    fragmentValue = replace;
  }

  // Parens
  else if (className) {
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

  // What else?
  else {
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
    <span
      className={classNames([
        'course-chat-content-fragment',
        { [`course-chat-content-fragment--${className}`]: className },
        { [`course-chat-content-fragment--${hooks.className}`]: hooks.className },
      ])}
    >
      <span className="course-chat-content-fragment-before">{beforeValue}</span>
      <Tag
        className={classNames([
          'course-chat-content-fragment-value',
          { [`course-chat-content-fragment-value--${className}`]: className },
          { [`course-chat-content-fragment-value--${hooks.className}`]: hooks.className },
        ])}
        {...attrsValue}
      >
        {hooks.value || fragmentValue}
      </Tag>
      <span className="course-chat-content-fragment-after">{afterValue}</span>
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
