/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Glamorous from 'glamorous';


/*
 * Local Import
 */
import { GeneriqueStyle } from 'src/components/Fragment/style';


/*
 * Style
 */
const Style = Glamorous.span({
  display: 'inline',
  color: '#0ac3a7',
}, ({ mention }) => {
  const styles = [];

  if (mention) {
    styles.push({ ...GeneriqueStyle, padding: '0 .25em' });
  }

  return styles;
});


/*
 * Component
 */
const Mention = ({ children }) => (
  <Style>{children}</Style>
);


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
