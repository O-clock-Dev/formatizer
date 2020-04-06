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
const Emoji = ({ before, children: code, altCode }) => {
  const title = altCode ? `${altCode} ${code}` : code;

  return (
  <React.Fragment>
    {before}
    <span
      title={title}
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
  </React.Fragment>
);

/*
 * PropTypes
 */
Emoji.propTypes = {
  before: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.string.isRequired,
  altCode: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Emoji.defaultProps = {
  before: '',
  altCode: false,
};

/*
 * Export default
 */
export default Emoji;
