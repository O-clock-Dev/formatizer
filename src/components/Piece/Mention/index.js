/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import { Style, StyleMention } from './style';

/*
 * Pattern
 */
export const patternMention = /(@[a-z0-9_]+)($|\s|[.,?!:;)])/gi;

/*
 * Component
 */
const Mention = ({ children, isMention }) => {
  const value = children.trim();
  const mention = value.slice(1);

  /*
   * If Mention match with my Name || 'question'
   * Return StyleMention
   */
  if (isMention(mention)) {
    return <StyleMention>{value}</StyleMention>;
  }

  /*
   * Otherwise, return basic Style
   */
  return <Style>{value}</Style>;
};

/*
 * PropTypes
 */
Mention.propTypes = {
  children: PropTypes.string.isRequired,
  isMention: PropTypes.func.isRequired,
};

/*
 * Export
 */
export default Mention;
