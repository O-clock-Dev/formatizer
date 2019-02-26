/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import allReplacements from 'src/patterns';

/*
 * Code
 */
const getFragments = (message, props) => {
  let messageFragments = [message];

  // For each replacement
  allReplacements.forEach((replacement) => {
    // Var to collect subfragments
    const subFragments = [];

    // We search in each parts
    messageFragments.forEach((messageFragment) => {
      // If this is a string
      if (typeof messageFragment === 'string') {
        let matches;
        let Component;
        let check;
        if (Array.isArray(replacement)) {
          const matchesSpoil = replacement[0].pattern.exec(messageFragment);
          const matchesHighlight = replacement[1].pattern.exec(messageFragment);

          if (matchesSpoil && matchesHighlight) {
            if (matchesSpoil.index > matchesHighlight.index) {
              matches = messageFragment.match(replacement[1].pattern);
              Component = replacement[1].Component;
            }
            else {
              matches = messageFragment.match(replacement[0].pattern);
              Component = replacement[0].Component;
            }
          }
          else if (matchesSpoil) {
            matches = messageFragment.match(replacement[0].pattern);
            Component = replacement[0].Component;
          }
          else if (matchesHighlight) {
            matches = messageFragment.match(replacement[1].pattern);
            Component = replacement[1].Component;
          }
        }
        else {
          // Then we search for pattern
          const { pattern } = replacement;
          Component = replacement.Component;
          check = replacement.check;
          matches = messageFragment.match(pattern);
        }

        // Fragment in which we look for next match
        let msgFragment = messageFragment;

        // For each match, take begin, replace match by fragment, and continue
        if (matches) {
          console.log('matches', matches);
          matches.forEach((match) => {
            const indexBegin = msgFragment.indexOf(match);
            const indexEnd = indexBegin + match.length;
            const messageBegin = msgFragment.slice(0, indexBegin);
            const messageEnd = msgFragment.slice(indexEnd);
            const mention = match.slice(1);

            // If there is no check, or check pass:
            // push the text before + component for the match
            if (!check || check(props, mention)) {
              // Begin
              if (messageBegin !== '') {
                subFragments.push(messageBegin);
              }

              // Fragment
              subFragments.push(<Component {...props}>{match}</Component>);
            }
            else {
              // If there is a check, but it does not pass
              // push the text before and the matching text without any component
              subFragments.push(`${messageBegin}${match}`);
            }

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

  console.log('messageFragments', messageFragments);
  // Return fragments
  return messageFragments;
};

/*
 * Export
 */
export default getFragments;
