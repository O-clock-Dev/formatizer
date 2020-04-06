/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Format from 'src/components/Format';

/*
 * Component
 */
const Formatizer = ({ children, ...props }) => (
  <div style={{ paddingRight: '.2em' }}>
    <Format {...props}>
      {typeof children === 'object' ? children.join('') : children}
    </Format>
  </div>
);
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
