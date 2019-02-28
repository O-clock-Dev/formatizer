/* eslint-disable react/no-array-index-key */
/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import getFragments from './getFragments';

/*
 * Code
 */

/*
 * Component
 */
// @TODO Add React.memo() when we upgrade to React 16.8
const Format = ({ children, ...props }) => {
  // Get all Fragments
  const fragments = getFragments(children, props);

  /*
   * View
   */

  // @TODO Delete <span> when we upgrade to React 16.2
  return (
    <span>
      {fragments.map((fragment, index) => {
        // If element is a string
        if (typeof fragment === 'string') {
          return <span key={index}>{fragment}</span>;
        }

        // Otherwise, is a Piece of Fragment.
        // Clone element to add key
        return React.cloneElement(fragment, { key: index });
      })}
    </span>
  );
};

/*
 * PropTypes
 */
Format.propTypes = {
  children: PropTypes.string,
  mentions: PropTypes.array,
  isMention: PropTypes.func,
  isMentionMe: PropTypes.func,
  onMention: PropTypes.func,
  onMentionMe: PropTypes.func,
  options: PropTypes.shape({
    spoiler: PropTypes.shape({
      open: PropTypes.bool,
      onClick: PropTypes.func,
    }),
  }),
};

Format.defaultProps = {
  children: '',
  mentions: [],
  isMention: () => true,
  isMentionMe: () => {},
  onMention: () => {},
  onMentionMe: () => {},
  options: {
    spoiler: {
      open: false,
      onClick: () => {},
    },
  },
};

/*
 * Export
 */
export default Format;
