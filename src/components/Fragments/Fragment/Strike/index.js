/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Glamorous from 'glamorous';

/*
 * Local Import
 */
import Format from 'src/index';

/*
 * Style
 */
const Style = Glamorous.span({
  display: 'inline',
  background:
    'linear-gradient(to bottom, transparent 50%, #fff 50%) no-repeat content-box 100% 55%/100% 4px',
});

/*
 * Component
 */
const Strike = ({ children }) => (
  <Style>
    <Format>{children}</Format>
  </Style>
);

/*
 * PropTypes
 */
Strike.propTypes = {
  children: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Strike;
