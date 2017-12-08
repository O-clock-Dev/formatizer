/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Fragments from 'src/components/Fragments';
import getFragments from 'src/components/Fragments/getFragments';

/*
 * Component
 */
// const Format = ({ children, mentions, isMention, isMentionUser }) => {
const Format = ({ children, isMention }) => {
  const fragments = getFragments(children, isMention);

  return <Fragments fragments={fragments} />;
};

/*
 * PropTypes
 */
Format.propTypes = {
  children: PropTypes.string,
  mentions: PropTypes.array,
  isMention: PropTypes.func,
  isMentionUser: PropTypes.func,
};

Format.defaultProps = {
  children: '',
  mentions: [],
  isMention: () => {},
  isMentionUser: () => {},
};

/*
 * Export
 */
export default Format;
