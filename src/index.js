/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import { display } from 'src/components/Fragment/display';

/*
 * Component
 */
const Format = ({ className, children, mentions, isMentionMe, onMention }) => (
  <div className={className}>
    {display(children, mentions, isMentionMe, onMention)}
  </div>
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
