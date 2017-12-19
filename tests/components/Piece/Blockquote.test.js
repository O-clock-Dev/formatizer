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
import Blockquote from 'src/components/Piece/Blockquote';
import TextFormat from 'src/components/Piece/TextFormat';

/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/components/Piece/Blockquote.js **', () => {
  it('Should add <Blockquote /> for a Quote', () => {
    const message = '> Bonjour, Je suis une quote';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Blockquote).should.have.length(1);
  });

  it('Should not add <Blockquote />', () => {
    const message = 'Bonjour, > Je suis une quote';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Blockquote).should.have.length(0);
  });

  it("Should not add <Blockquote /> if we're passing at line", () => {
    const message = '>\nJe suis une quote';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Blockquote).should.have.length(0);
  });

  it('Should add <Blockquote /> if we have a space before \\n', () => {
    const message = '> \nBonjour, Je suis une quote';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Blockquote).should.have.length(1);
  });

  it('Should add <Blockquote /> and <TextFormat />', () => {
    const message = '> *Hello*';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Blockquote).should.have.length(1);
    wrapper.find(TextFormat).should.have.length(1);
  });
});
