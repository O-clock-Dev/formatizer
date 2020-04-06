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

  it('should add <Color /> with color in quote', () => {
    const message = "Hello '#ee1225'";
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Color).should.have.length(1);
  });

  it('should add one <Color /> if two colors are stuck', () => {
    const message = 'Hello #ee1225#ee1225';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Color).should.have.length(1);
  });

  it('<Color /> should have a property color which be equal "ee1225"', () => {
    const message = 'Hello #ee1225';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Color);

    component
      .props()
      .should.have.property('children')
      .which.be.equal('#ee1225');
  });

  it('should not add <Color /> if characters after # is > F', () => {
    const message = 'Hello #ABCZZZ';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Color).should.have.length(0);
  });

  it('should not add <Code /> if color is stuck at the <Mention />', () => {
    const message = 'Hello @alex#123';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Color).should.have.length(0);
  });
});
