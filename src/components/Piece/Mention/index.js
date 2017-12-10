/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import { Style } from './style';

/*
 * Pattern
 */
// @TODO : Améliorer la regex,
// sinon ça prend en compte un espace à la fin,
// et ça le supprime lors de la transformation.
export const patternMention = /(@[a-z0-9_]+)($|\s|[.,?!:;)])/gi;

/*
 * Component
 */
const Mention = ({ children }) => <Style>{children}</Style>;

/*
 * PropTypes
 */
Mention.propTypes = {
  children: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Mention;
