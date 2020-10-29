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
      <span
        className="formatizer-emoji-container"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          verticalAlign: 'middle',
        }}
      >
        {before}
        <span
          className="formatizer-emoji"
          title={title}
          dangerouslySetInnerHTML={{
            __html: Emojimart({
              html: true,
              set: 'apple',
              emoji: code,
              fallback: (emojiFound, props) =>
                // eslint-disable-next-line react/prop-types
                (emojiFound ? `:${emojiFound.short_names[0]}:` : props.emoji),
              size: 20,
            }),
          }}
        />
      </span>
    </React.Fragment>
  );
};

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
