/*
 * Package Import
 */
import React from 'react';
import { PropTypes } from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';


/*
 * Local Import
 */
import { PreFormatted } from './style';


/*
 * Code
 */
const languages = [
  'apache',
  'apacheconf',
  'bash',
  'sh',
  'zsh',
  'css',
  'xml',
  'html',
  'xhtml',
  'rss',
  'atom',
  'xjb',
  'xsd',
  'xsl',
  'plist',
  'ini',
  'json',
  'javascript',
  'js',
  'jsx',
  'less',
  'markdown',
  'md',
  'mkdown',
  'mkd',
  'php',
  'scss',
  'sql',
  'stylus',
  'styl',
  'twig',
];


/*
 * Component
 */
const Highlight = ({ className, language, children }) => {
  const languageExist = languages.filter(lang => lang === language)[0];

  // Attribute Options
  const options = {
    style: atomOneDark,
    customStyle: PreFormatted,
    language: !languageExist ? '' : languageExist,
  };


    /*
     * View
     */
  return (
    <SyntaxHighlighter className={className} {...options}>
      {children}
    </SyntaxHighlighter>
  );
};


/*
 * PropTypes
 */
Highlight.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};


/*
 * Export
 */
export default Highlight;
