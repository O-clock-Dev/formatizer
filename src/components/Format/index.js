/* eslint-disable react/no-array-index-key */
/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import getFragments from './getFragments';
import { Container } from './style';

/*
 * Code
 */

/*
 * Component
 */
const Format = ({ children, ...props }) => {
  // Get all Fragments
  const fragments = getFragments(children, props);

  /*
   * View
   */

  // @TODO : Delete <span> when we pass at React 16
  return (
    <Container>
      {fragments.map((fragment, index) => {
        // If element is a string
        if (typeof fragment === 'string') {
          return <span key={index}>{fragment}</span>;
        }

        // Otherwise, is a Piece of Fragment.
        // Clone element to add key
        return React.cloneElement(fragment, { key: index });
      })}
    </Container>
  );
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
