/*
 * Package Import
 */
import React from 'react';
import { should } from 'chai';
import { mount } from 'enzyme';

/*
 * Local Import
 */
import { Formatizer } from 'src';

/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/components/Format.js **', () => {
  it('should be display a simple Text', () => {
    const message = 'test';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper
      .text()
      .should.be.a('string')
      .which.be.equal('test');
  });
});
