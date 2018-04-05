/* eslint-disable max-len */
/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

/*
 * Local Import
 */

/*
 * Pattern
 */

// 1. Protocol : http, https, ftp or atom
// 2. www. or not
// 3. Domain : mydomaine.com, oclock.io, localhost, ... or teletype
// 4. ...rest of the query
export const patternLink = /(?:https?|atom|ftp):\/\/(?:www\.)?(?:(?:localhost|teletype)?(?=\/)|[-a-zA-Z0-9@:%._+~#=]{1,256}[.:][a-zA-Z0-9]{1,6}\b)(?:\/[-a-zA-Z0-9@:%_+?.,~#?&()/=]*)?/g;

/*
 * Style
 */
const Style = glamorous.a({
  textDecoration: 'underline',
  textUnderlinePosition: 'under',
});

/*
 * Component
 */
const Link = ({ children }) => {
  // @TODO : Voir pour refaire cette partie plus proprement.
  // Intégrer directement la partie avec le slice dans la régex
  const last = children.slice(-1);

  if (last === '.' || last === ',') {
    const link = children.slice(0, -1);
    return (
      <span>
        <Style href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </Style>
        {last}
      </span>
    );
  }

  return (
    <Style href={children} target="_blank" rel="noopener noreferrer">
      {children}
    </Style>
  );
};

/*
 * PropTypes
 */
Link.propTypes = {
  children: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Link;
