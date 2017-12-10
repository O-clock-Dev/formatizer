/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Glamorous from 'glamorous';

/*
 * Local Import
 */

/*
 * Pattern
 */
// @TODO : Améliorer la regex,
// sinon ça prend en compte un espace à la fin,
// et ça le supprime lors de la transformation.
export const pattern = /(https?:\/\/(?:[^\s()]|\(.+?\))+?)($|\s|[.,?!:;)]\s)/g;

/*
 * Style
 */
const Style = Glamorous.a({
  textDecoration: 'underline',
  textDecorationSkip: 'ink',
});

/*
 * Component
 */
const Link = ({ children }) => (
  <Style href={children} target="_blank" rel="noopener noreferrer">
    {children}
  </Style>
);

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
