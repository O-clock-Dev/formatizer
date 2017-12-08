/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Glamorous from 'glamorous';

/*
 * Local Import
 */
import { GeneriqueStyle } from '../style';

/*
 * Style
 */
const Style = Glamorous.span({
  ...GeneriqueStyle,
  color: '#abb2bf',
  fontFamily: 'Menlo',
  padding: '.1em .3em',
  fontSize: '1.4rem',
});

/*
 * Component
 */
const Code = ({ children }) => <Style>{children}</Style>;

/*
 * PropTypes
 */
Code.propTypes = {
  children: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Code;
