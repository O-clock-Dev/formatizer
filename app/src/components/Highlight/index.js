/*
 * Npm import
 */
import React, { PropTypes } from 'react';
import hljs from 'highlight.js';
import classNames from 'classnames';


/*
 * Local import
 */


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
   * Lifecycles
   */
  componentDidMount() {
    hljs.configure({ languages });
    hljs.highlightBlock(this.node);
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

    // Children
    delete attrs.children;

    // Language
    if (attrs.language) {
      attrs.className = classNames([
        { [attrs.className]: attrs.className },
        attrs.language,
      ]);
    }
    delete attrs.language;

    return (
      <pre ref={this.saveNode} {...attrs}>
        {this.props.children}
      </pre>
    );
  }
}
