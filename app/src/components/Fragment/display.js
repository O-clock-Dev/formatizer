/*
 * Npm import
 */
import React from 'react';
import sanitizeHtml from 'sanitize-html';


/*
 * Local import
 */
// Display
import { shortnameToImage } from '../Emoji';
import Fragment from './index';

// Formatting
import emojiFormatting from './formatting/emojis';
import prioFormatting from './formatting/priorities';
import textFormatting from './formatting/text';

const allReplacements = [
  ...prioFormatting,
  ...emojiFormatting,
  ...textFormatting,
];

const sanitizeOptions = {
  allowedTags: [],
  allowedAttributes: [],
};


/*
 * Code
 */
const getFragments = (replacements, message) => {
  let messageFragments = [message];

  // For each replacement
  replacements.forEach((replacement) => {
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
            subFragments.push(<Fragment replacement={replacement} values={values} />);

            // End
            msgFragment = messageEnd;
          });
        }

        // Last fragment
        if (msgFragment !== '') {
          subFragments.push(msgFragment);
        }
      }

      // If this not a string, this is a already a fragment. Nothing to do.
      else {
        subFragments.push(messageFragment);
      }
    });

    // subFragments is the new fragments :)
    messageFragments = subFragments;
  });

  // Return fragments
  return messageFragments;
};


const displayFragments = fragments => (
  fragments.map((Frag, index) => {
    if (typeof Frag === 'string') {
      // Get rid of html or XSS
      const text = sanitizeHtml(Frag, sanitizeOptions);

      // Add emoji
      const html = { __html: shortnameToImage(text) };

      // Insert into HTML
      return (
        <span
          key={index}
          dangerouslySetInnerHTML={html}
        />
      );
    }
    return React.cloneElement(Frag, { key: index });
  })
);


const display = (replacements, message) => {
  // Create fragments
  const fragments = getFragments(replacements, message);

  // Return
  return displayFragments(fragments);
};


/*
 * Export
 */
export const displayHtml = message => display(allReplacements, message);
export const displayEmoji = message => display(emojiFormatting, message);