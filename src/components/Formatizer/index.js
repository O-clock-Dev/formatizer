/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Format from 'src/components/Format';
import { Container } from './style';

/*
 * Component
 */
const Formatizer = ({ children, ...props }) => (
  <Container>
    <Format {...props}>
      {typeof children === 'object' ? children.join('') : children}
    </Format>
  </Container>
);

/*
 * PropTypes
 */
Formatizer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

Formatizer.defaultProps = {
  children: '',
};

/*
 * Export
 */
export default Formatizer;
