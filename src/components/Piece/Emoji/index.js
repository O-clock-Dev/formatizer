/*
 * Package import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Emoji as Emojimart } from 'emoji-mart';

/*
 * Local import
 */

/*
 * Components
 */
// @TODO Get rid of <span> with React 16.2
// @TODO Use Character to create <br /> ?
const Emoji = ({ before, children }) => (
  <span title={children}>
    {before}
    <span
      dangerouslySetInnerHTML={{
        __html: Emojimart({
          html: true,
          set: 'twitter',
          emoji: children,
          fallback: (emojiFound, props) =>
            // eslint-disable-next-line react/prop-types
            (emojiFound ? `:${emojiFound.short_names[0]}:` : props.emoji),
          size: 20,
        }),
      }}
    />
  </span>
);

/*
 * PropTypes
 */
Emoji.propTypes = {
  before: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.string.isRequired,
};

Emoji.defaultProps = {
  before: '',
};

/*
 * Export default
 */
export default Emoji;
