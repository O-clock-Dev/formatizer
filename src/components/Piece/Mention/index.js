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
export const patternMention = /(?:\B)(?:@[a-zÀ-ÿ0-9._!'-]+)/gi;

/*
 * Component
 */
const Mention = ({
  children,
  isMentionMe,
  isMention,
  onMention,
  onMentionMe,
}) => {
  const value = children.trim();
  const mention = value.slice(1);

  /*
   * If Mention match with my Name || 'question'
   * Return StyleMention
   */
  if (isMentionMe(mention)) {
    onMentionMe(mention);
    return <StyleMention>{value}</StyleMention>;
  }

  /*
   * Otherwise, return basic Style
   */
  if (isMention(mention)) {
    onMention(mention);
    return <Style>{value}</Style>;
  }

  return false;
};

/*
 * PropTypes
 */
Mention.propTypes = {
  children: PropTypes.string.isRequired,
  isMention: PropTypes.func.isRequired,
  isMentionMe: PropTypes.func.isRequired,
  onMention: PropTypes.func.isRequired,
  onMentionMe: PropTypes.func.isRequired,
};

/*
 * Export
 */
export default Mention;
