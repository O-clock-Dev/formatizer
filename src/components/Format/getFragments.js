/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import allReplacements from 'src/replacements';

/*
 * Code
 */
/**
 * Split message into an array for a given pattern
 * @param  {String} message     Message to formatize
 * @param  {Object} pattern     Pattern to search for
 * @param  {Function} check     Additionnal checking function (optionnal)
 * @param  {Function} Component Component to insert
 * @param  {Object} props       User land props
 * @return {Array}              Array of fragments (string or React element)
 */
const splitMessage = ({ message, pattern, check, Component, props }) => {
  const subFragments = [];

  // Match and get rid of undefined values
  const matches = message.match(pattern);

  // Fragment in which we look for next match
  let msgFragment = message;

  // For each match, take begin, replace match by fragment, and continue
  if (matches) {
    // Before looping, filter undefined values
    matches.filter(match => match).forEach((match) => {
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
 * Transform a string into array of fragments for a given replacement
 * @param  {String} message           Message to formatize
 * @param  {Array|Object} replacement Replacement
 * @param  {Object} props             User land props
 * @return {Array}                    Array of fragments (string or React element)
 */
const getSubFragments = ({ message, replacement, props }) => {
  let winner;

  // Which pattern is going to fire first?
  if (Array.isArray(replacement)) {
    let winnerIndex = Infinity;
    replacement.forEach((repl) => {
      // Never forget to reset lastIndex after a .exec()
      const match = repl.pattern.exec(message);
      repl.pattern.lastIndex = 0;
      if (match && match.index < winnerIndex) {
        winnerIndex = match.index;
        winner = repl;
      }
    });
  }
  else {
    // Easy to win a race when you're alone :)
    winner = replacement;
  }

  // If there is a winner, split baby!
  if (winner) {
    return splitMessage({ message, props, ...winner });
  }

  // No pattern found, nothing to split, just return the message
  return [message];
};

/**
 * Apply a replacement on fragments
 * @param  {Array} fragments          Array of fragments (string or React element)
 * @param  {Array|Object} replacement Replacement
 * @param  {Object} props             User land props
 * @return {Array}                    Array of fragments (string or React element)
 */
const applyReplacement = ({ fragments, replacement, props }) => {
  // Var to collect subfragments
  const subFragments = [];

  // We search in each parts
  fragments.forEach((fragment) => {
    // If this is a string
    if (typeof fragment === 'string') {
      subFragments.push(
        ...getSubFragments({
          message: fragment,
          replacement,
          props,
        }),
      );
    }
    else {
      // If this not a string, this is a already a fragment. Nothing to do.
      subFragments.push(fragment);
    }
  });

  // subFragments is the new fragments :)
  return subFragments;
};

/**
 * Transform a string into array of fragments
 * @param  {String} message Message to formatize
 * @param  {Object} props   User land props
 * @return {Array}          Array of fragments (string or React element)
 */
const getFragments = ({ message, props }) => {
  let fragments = [message];

  // For each replacement
  allReplacements.forEach((replacement) => {
    fragments = applyReplacement({ fragments, replacement, props });
  });

  // Return fragments
  return fragments;
};

/*
 * Export
 */
export default getFragments;
