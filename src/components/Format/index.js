/* eslint-disable react/no-array-index-key */

/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';

/*
 * Local Import
 */
import getFragments from './getFragments';

/*
 * Code
 */
const sanitizeOptions = { allowedTags: [], allowedAttributes: [] };

/*
 * Component
 */
const Format = ({ children, ...props }) => {
  // Get all Fragments
  const fragments = getFragments(children, props);

  /*
   * View
   */

  // @TODO : Delate <span> when we pass at React 16
  return (
    <span>
      {fragments.map((fragment, index) => {
        // If element is a string
        if (typeof fragment === 'string') {
          // Get rid of html or XSS
          const html = sanitizeHtml(fragment, sanitizeOptions);
          return (
            <span key={index} dangerouslySetInnerHTML={{ __html: html }} />
          );
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
  isMentionUser: PropTypes.func,
};

Format.defaultProps = {
  children: '',
  mentions: [],
  isMention: () => {},
  isMentionUser: () => {},
};

/*
 * Export
 */
export default Format;
