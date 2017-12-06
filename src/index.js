/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Display from 'src/components/Fragment/Display';

/*
 * Component
 */
// const Format = ({ className, children, mentions, isMentionMe, onMention }) => (
const Format = ({ className, children }) => (
  <Display className={className} message={children} />
);

/*
 * PropTypes
 */
Format.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  mentions: PropTypes.array,
  isMentionMe: PropTypes.func,
  onMention: PropTypes.func,
};

Format.defaultProps = {
  className: '',
  children: '',
  mentions: [],
  isMentionMe: () => {},
  onMention: () => {},
};

/*
 * Export
 */
export default Format;
