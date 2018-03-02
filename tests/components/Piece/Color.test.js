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
import Color from 'src/components/Piece/Color';
import { Style } from 'src/components/Piece/Color/style';

/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/components/Piece/Color.js **', () => {
  it('should add <Color />', () => {
    const message = 'Hello #ee1225';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Color).should.have.length(1);
  });

  it('should add <Color /> for each color which is matching', () => {
    const message = 'Hello #ee1225 #F1F1F1';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Color).should.have.length(2);
  });

  it('should not add <Color /> if we have 4 characters after #', () => {
    const message = 'Hello #ee12';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Color).should.have.length(0);
  });

  it('should not add <Color /> if characters after # is > F', () => {
    const message = 'Hello #ABCZZZ';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Color).should.have.length(0);
  });

  it('<Color /> should have a property color which be equal "ee1225"', () => {
    const message = 'Hello #ee1225';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper
      .find(Color)
      .find(Style)
      .props()
      .should.have.property('color')
      .which.be.equal('#ee1225');
  });
});
