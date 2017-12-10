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
import TextFormat from 'src/components/Piece/TextFormat';
import Emoji from 'src/components/Piece/Emoji';

/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/components/Piece/TextFormat.js **', () => {
  it('Should format string in Bold', () => {
    const message = '*test*';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(TextFormat).should.have.length(1);
  });

  it('Should format string in Italic', () => {
    const message = '_test_';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(TextFormat).should.have.length(1);
  });

  it('Should format string in Strike', () => {
    const message = '~test~';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(TextFormat).should.have.length(1);
  });

  it("Shouldn't format string with multi line", () => {
    const message = '*\ntest\n*';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(TextFormat).should.have.length(0);
  });

  it('Should format string with a smiley', () => {
    const message = '*test :)*';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(TextFormat).should.have.length(1);
    wrapper.find(Emoji).should.have.length(1);
  });

  it('Should format a string with many Piece', () => {
    const message = '*_test_*';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(TextFormat).should.have.length(2);
  });

  it('Should format multiple string', () => {
    const message = '*un* _deux_';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(TextFormat).should.have.length(2);
  });
});
