/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Highlighter from 'react-syntax-highlighter';
import { atomOneDark as style } from 'react-syntax-highlighter/dist/styles';

/*
 * Local Import
 */
import customStyle from './style';
import languages from './languages';

/*
 * Patterns
 */
/* eslint-disable prefer-template */
const regexp = '```(?:(' + languages.join('|') + ')\\s+)?((?:.|\\n)+?)```\\n?';
export const patternHighlight = new RegExp(regexp, 'g');

/*
 * Component
 */
const Highlight = ({ children }) => {
  // Never forget to reset lastIndex after a .exec()
  const matches = patternHighlight.exec(children);
  patternHighlight.lastIndex = 0;

  // Highlighter options
  const options = { style, customStyle };

  // First capturing paren: language
  if (matches[1]) {
    options.language = matches[1];
  }

  // Second capturing paren: code + trim it
  const code = matches[2].trim();

  // View
  return <Highlighter {...options}>{code}</Highlighter>;
};

/*
 * PropTypes
 */
Highlight.propTypes = {
  children: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Highlight;
