/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import Format from 'src/components/Format';
import { Container } from './style';

/*
 * Code
 */

/*
 * Component
 */
const Formatizer = props => (
  <Container>
    <Format {...props} />
  </Container>
);

/*
 * Export
 */
export default Formatizer;
