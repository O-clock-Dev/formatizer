/* eslint-disable max-len */
/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

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

// Regex to match markdown links
export const patternLinkMarkdown = /\[([^[]+)\]\(([a-zA-Z0-9@:%_+?.,~#?&()/=-]+)\)/g;

/*
 * Style
 */
const style = {
  textDecoration: 'underline',
  textUnderlinePosition: 'under',
};

/*
 * Component
 */
const Link = ({ children }) => {
  const matches = patternLinkMarkdown.exec(children);
  patternLinkMarkdown.lastIndex = 0;

  if (matches) {
    const [, label, link] = matches;

    return (
      <a style={style} href={link} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  // @TODO : Voir pour refaire cette partie plus proprement.
  // Intégrer directement la partie avec le slice dans la régex
  const last = children.slice(-1);

  if (last === '.' || last === ',') {
    const link = children.slice(0, -1);

    return (
      <React.Fragment>
        <a style={style} href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
        {last}
      </React.Fragment>
    );
  }

  return (
    <a style={style} href={children} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
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
