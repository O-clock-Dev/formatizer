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
/**
 * [getFragmentsFromString description]
 * @param  {[type]} replacement     [description]
 * @param  {[type]} fragment [description]
 * @param  {[type]} props           [description]
 * @return {[type]}                 [description]
 */
const getFragmentsFromString = ({ replacement, fragment, props }) => {
  let matches;
  let Component;
  let check;
  const subFragments = [];
  if (Array.isArray(replacement)) {
    const matchesSpoil = replacement[0].pattern.exec(fragment);
    const matchesHighlight = replacement[1].pattern.exec(fragment);

    if (matchesSpoil && matchesHighlight) {
      if (matchesSpoil.index > matchesHighlight.index) {
        matches = fragment.match(replacement[1].pattern);
        Component = replacement[1].Component;
      }
      else {
        matches = fragment.match(replacement[0].pattern);
        Component = replacement[0].Component;
      }
    }
    else if (matchesSpoil) {
      matches = fragment.match(replacement[0].pattern);
      Component = replacement[0].Component;
    }
    else if (matchesHighlight) {
      matches = fragment.match(replacement[1].pattern);
      Component = replacement[1].Component;
    }
  }
  else {
    // Then we search for pattern
    const { pattern } = replacement;
    Component = replacement.Component;
    check = replacement.check;
    matches = fragment.match(pattern);
  }

  // Fragment in which we look for next match
  let msgFragment = fragment;

  // For each match, take begin, replace match by fragment, and continue
  if (matches) {
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

  return subFragments;
};

/**
 * Transform a string into array of node
 * @param  {String} message Message to formatize
 * @param  {Object} props   User land props
 * @return {Array}          Array of node (string or React element)
 */
const getFragments = ({ message, props }) => {
  let fragments = [message];
  // For each replacement
  allReplacements.forEach((replacement) => {
    // Var to collect subfragments
    const subFragments = [];

    // We search in each parts
    fragments.forEach((fragment) => {
      // If this is a string
      if (typeof fragment === 'string') {
        subFragments.push(
          ...getFragmentsFromString({ replacement, fragment, props }),
        );
      }
      else {
        // If this not a string, this is a already a fragment. Nothing to do.
        subFragments.push(fragment);
      }
    });

    // subFragments is the new fragments :)
    fragments = subFragments;
  });

  // Return fragments
  return fragments;
};

/*
 * Export
 */
export default getFragments;
