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
export default class Highlight extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    children: PropTypes.string.isRequired,
    language: PropTypes.oneOf(languages),
  }

  static defaultProps = {
    language: '',
  }


  /*
   * Ref
   */
  saveNode = (node) => {
    this.node = node;
  }


  /*
   * Render
   */
  render() {
    const attrs = { ...this.props };

    // Delete Children
    delete attrs.children;

    // Attribute Options
    const options = {
      style: atomOneDark,
      customStyle: PreFormatted,
      language: attrs.language,
    };


    /*
     * View
     */
    return (
      <SyntaxHighlighter {...options} ref={this.saveNode} {...attrs}>
        {this.props.children}
      </SyntaxHighlighter>
    );
  }
}
