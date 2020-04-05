/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import { Chunk } from '../style';

/*
 * Pattern
 */
export const patternMention = /(?:\B)(?:@[a-zÀ-ÿ0-9._!'-]+)/gi;

// @TODO : Mention with Space -- WIP
// export const patternMention = /(?:\B)@(?:[a-zÀ-ÿ0-9'._!-]+)\s?(?:[a-zÀ-ÿ0-9'._-]*)/gi

/*
 * Style
 */
const styleMention = {
  ...Chunk,
  color: '#0ac3a7',
  padding: '0 .25em',
};
const style = {
  color: '#0ac3a7',
};

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
    return <span style={styleMention}>{value}</span>;
  }

  /*
   * Otherwise, return basic Style
   */
  if (isMention(mention)) {
    onMention(mention);
    return <span style={style}>{value}</span>;
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
