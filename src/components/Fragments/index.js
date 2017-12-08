/* eslint-disable react/no-array-index-key */

/*
 * Package Import
 */
import React from 'react';
import sanitizeHtml from 'sanitize-html';

/*
 * Local Import
 */


/*
 * Code
 */
const sanitizeOptions = { allowedTags: [], allowedAttributes: [] };

/*
 * Component
 */
const Fragments = ({ fragments }) => fragments.map((Frag, index) => {
  // Get rid of html or XSS
  const string = sanitizeHtml(Frag, sanitizeOptions);

  if (typeof Frag === 'string') {
    // Add emoji
    const html = { __html: string };

    // Insert into HTML
    return <span key={index} dangerouslySetInnerHTML={html} />;
  }
  return React.cloneElement(Frag, { key: index });
});

/*
 * Export
 */
export default Fragments;
