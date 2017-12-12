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
import Character from 'src/components/Piece/Character';

/*
 * Pattern
 */
// @TODO : Améliorer la regex,
// sinon ça prend en compte un espace à la fin,
// et ça le supprime lors de la transformation.
export const patternLink = /(https?:\/\/(?:[^\s()]|\(.+?\))+?)($|\s|[.,?!:;)]\s)/g;

/*
 * Style
 */
const Style = glamorous.a({
  textDecoration: 'underline',
  textDecorationSkip: 'ink',
});

/*
 * Component
 */
// @TODO Get rid of <span> with React 16.2
const Link = ({ children }) => {
  const [, link, after] = Array.from(patternLink.exec(children));
  patternLink.lastIndex = 0;
  return (
    <span>
      <Style href={link} target="_blank" rel="noopener noreferrer">
        {link}
      </Style>
      {after && <Character>{after}</Character>}
    </span>
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
