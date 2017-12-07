/* eslint-disable react/no-array-index-key */

/*
 * Package Import
 */
import React from 'react';
import sanitizeHtml from 'sanitize-html';

/*
 * Local Import
 */
import { shortnameToImage } from 'src/components/Emoji';
import { EmojiContainer } from 'src/components/Emoji/style';

/*
 * Code
 */
const sanitizeOptions = { allowedTags: [], allowedAttributes: [] };

/*
 * Component
 */
const Fragments = ({ fragments }) =>
  fragments.map((Frag, index) => {
    // Get rid of html or XSS
    const string = sanitizeHtml(Frag, sanitizeOptions);

    if (typeof Frag === 'string') {
      // Add emoji
      const html = { __html: shortnameToImage(string) };

      // Insert into HTML
      return <EmojiContainer key={index} dangerouslySetInnerHTML={html} />;
    }
    return React.cloneElement(Frag, { key: index });
  });

/*
 * Export
 */
export default Fragments;
