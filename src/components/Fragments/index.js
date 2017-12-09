/* eslint-disable react/no-array-index-key */

/*
 * Package Import
 */
import React from 'react';
import sanitizeHtml from 'sanitize-html';

/*
 * Local Import
 */
import Fragment from './Fragment';

/*
 * Code
 */
const sanitizeOptions = { allowedTags: [], allowedAttributes: [] };

/*
 * Component
 */
const Fragments = ({ fragments }) =>
  fragments.map((fragment, index) => {
    const { replacement, values } = fragment;

    // If element is a string
    if (typeof fragment === 'string') {
      // Get rid of html or XSS
      const html = sanitizeHtml(fragment, sanitizeOptions);
      return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
    }

    // Otherwise, is a Piece of Fragment.
    return <Fragment key={index} replacement={replacement} values={values} />;
  });

/*
 * Export
 */
export default Fragments;
