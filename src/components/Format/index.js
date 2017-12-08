/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Fragments from 'src/components/Fragments';
import getFragments from './getFragments';

/*
 * Component
 */
// const Formatizer = ({ children, mentions, isMention, isMentionUser }) => {
const Formatizer = ({ children, isMention }) => {
  const fragments = getFragments(children, isMention);
  return <Fragments fragments={fragments} />;
};

/*
 * PropTypes
 */
Formatizer.propTypes = {
  children: PropTypes.string,
  mentions: PropTypes.array,
  isMention: PropTypes.func,
  isMentionUser: PropTypes.func,
};

Formatizer.defaultProps = {
  children: '',
  mentions: [],
  isMention: () => {},
  isMentionUser: () => {},
};

/*
 * Export
 */
export default Formatizer;
