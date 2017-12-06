/* eslint-disable react/no-array-index-key */

/*
 * Npm import
 */
import React from 'react';
import sanitizeHtml from 'sanitize-html';

/*
 * Local import
 */
import { emojis, priorities, text } from 'src/patterns';
import Fragment from './index';

const sanitizeOptions = {
  allowedTags: [],
  allowedAttributes: [],
};

/*
 * Code
 */
const getFragments = (allReplacements, message) => {
  let messageFragments = [message];

  // For each replacement
  allReplacements.forEach((replacement) => {
    // Var to collect subfragments
    const subFragments = [];

    // We search in each parts
    messageFragments.forEach((messageFragment) => {
      // If this is a string
      if (typeof messageFragment === 'string') {
        // Then we search for pattern
        const { pattern } = replacement;
        const matches = messageFragment.match(pattern);

        // Fragment in which we look for next match
        let msgFragment = messageFragment;

        // For each match, take begin, replace match by fragment, and continue
        if (matches) {
          matches.forEach((match) => {
            const indexBegin = msgFragment.indexOf(match);
            const indexEnd = indexBegin + match.length;
            const messageBegin = msgFragment.slice(0, indexBegin);
            const messageEnd = msgFragment.slice(indexEnd);

            // Begin
            if (messageBegin !== '') {
              subFragments.push(messageBegin);
            }

            // Get result, reset, and transform to array
            const result = pattern.exec(match);
            pattern.lastIndex = 0;
            const values = Array.from(result);

            // Fragment
            subFragments.push(
              <Fragment replacement={replacement} values={values} />,
            );

            // End
            msgFragment = messageEnd;
          });
        }

        // Last fragment
        if (msgFragment !== '') {
          subFragments.push(msgFragment);
        }
      }
      else {
        // If this not a string, this is a already a fragment. Nothing to do.
        subFragments.push(messageFragment);
      }
    });

    // subFragments is the new fragments :)
    messageFragments = subFragments;
  });

  // Return fragments
  return messageFragments;
};

const displayFragments = fragments =>
  fragments.map((Frag, index) => {
    if (typeof Frag === 'string') {
      // Get rid of html or XSS
      const string = sanitizeHtml(Frag, sanitizeOptions);

      // Insert into HTML
      return <span key={index} dangerouslySetInnerHTML={{ __html: string }} />;
    }
    return React.cloneElement(Frag, { key: index });
  });

/*
 * Display
 */
const Display = ({ message, isMentionMe }) => {
  // Create fragments
  const allReplacements = [...emojis, ...priorities, ...text];
  const fragments = getFragments(allReplacements, message, isMentionMe);

  return displayFragments(fragments);
};

/*
 * Export
 */
export default Display;
