/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Highlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';

/*
 * Local Import
 */
import CustomStyle from './style';
import languages from './languages';

/*
 * Patterns
 */
export const pattern = /```(?:([a-z0-9-]+)(?:\s|\n))?((?:.|\n)+?)```\n?/g;

/*
 * Component
 */
const Highlight = ({ children }) => {
  const language = '';

  // Attribute Options
  const options = {
    style: atomOneDark,
    customStyle: CustomStyle,
    language: languages.find(lang => lang === language) || '',
  };

  /*
   * View
   */
  return <Highlighter {...options}>{children}</Highlighter>;
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
