/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import { Chunk, CodingFont } from '../style';

/*
 * Pattern
 */
export const patternCode = /`(.+?)\n?`/g;

/*
 * Style
 */
const style = {
  ...Chunk,
  ...CodingFont,
  color: '#abb2bf',
  padding: '.1em .3em',
};

/*
 * Component
 */
const Code = ({ children }) => {
  // Get rid of first and last `
  const value = children.slice(1, -1).trim();

  return <span style={style}>{value}</span>;
};

/*
 * PropTypes
 */
Code.propTypes = {
  children: PropTypes.any.isRequired,
};

/*
 * Export
 */
export default Code;
