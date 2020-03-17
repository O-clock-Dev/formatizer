/* eslint-disable max-len */

/*
 * Package import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import Character from 'src/components/Piece/Character';
import Emoji from './index';

/*
 * Data
 */
const smileyToColon = {
  '8)': ':sunglasses:',
  '8-)': ':sunglasses:',
  ':|': ':neutral_face:',
  ':-|': ':neutral_face:',
  '=)': ':grinning:',
  '=-)': ':grinning:',
  ';)': ':wink:',
  ';-)': ':wink:',
  ':>': ':laughing:',
  ':->': ':laughing:',
  '>:(': ':angry:',
  '>:-(': ':angry:',
  ':)': ':slightly_smiling_face:',
  ':-)': ':slightly_smiling_face:',
  ':(': ':disappointed:',
  ':-(': ':disappointed:',
  ':/': ':confused:',
  ':-/': ':confused:',
  ':\\': ':confused:',
  ':-\\': ':confused:',
  ':o)': ':monkey_face:',
  ':d': ':grin:',
  ':-d': ':grin:',
  ':D': ':grin:',
  ':-D': ':grin:',
  ':o': ':open_mouth:',
  ':-o': ':open_mouth:',
  ':O': ':open_mouth:',
  ':-O': ':open_mouth:',
  ':x': ':no_mouth:',
  ':-x': ':no_mouth:',
  ':X': ':no_mouth:',
  ':-X': ':no_mouth:',
  ':p': ':yum:',
  ':-p': ':yum:',
  ':P': ':yum:',
  ':-P': ':yum:',
  ':*': ':kiss:',
  ':-*': ':kiss:',
  ":'(": ':cry:',
};

/**
 * Smiley to replace
 * @param  {String} smiley
 * @return {String}
 */
export const smileyReplace = smiley => smileyToColon[smiley];

/*
 * Pattern
 */
export const smileyStr =
  "(8-?\\)|:-?\\||:o\\)|=-?\\)|;-?\\)|:-?>|>:-?\\(|:-?\\)|:-?\\(|:-?\\/|:-?\\\\|:-?d|:-?o|:-?x|:-?p|:-?\\*|:'\\()";
export const patternSmiley = new RegExp(smileyStr, 'gi');

/*
 * Components
 */
const Smiley = ({ children }) => {
  let before = '';
  let emoji = children;

  // Smiley ?
  const matches = patternSmiley.exec(children);
  patternSmiley.lastIndex = 0;

  if (matches) {
    before = !!matches[2] && <Character>{matches[2]}</Character>;
    emoji = matches[1]
      .replace(patternSmiley, smileyReplace)
      .replace(/\n{2,}/g, '<br /><br />')
      .replace(/\n/g, '<br />');
  }

  return <Emoji before={before}>{emoji}</Emoji>;
};

/*
 * PropTypes
 */
Smiley.propTypes = {
  children: PropTypes.string.isRequired,
};

/*
 * Export default
 */
export default Smiley;
