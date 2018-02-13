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
export const patternMention = /\B(@[a-z0-9_-]+)($|\b|[.,?!:;)])/gi;

/*
 * Component
 */
const Mention = ({ children, isMention, isMentionMe }) => {
  const value = children.trim();
  const mention = value.slice(1);

  /*
   * If mentions doesn't exist in usersList
   * return the string
   */
  if (!isMention(mention)) {
    return (
      // @TODO : Delete <span> when we pass at React 16
      <span>{value}</span>
    );
  }

  /*
   * If Mention match with my Name || 'question'
   * Return StyleMention
   */
  if (isMentionMe(mention)) {
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
  isMentionMe: PropTypes.func.isRequired,
};

/*
 * Export
 */
export default Mention;
