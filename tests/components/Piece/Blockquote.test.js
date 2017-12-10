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

/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/components/Piece/Blockquote.js **', () => {
  it('Should add <Blockquote> for a Quote', () => {
    const message = '> Bonjour, Je suis une quote';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Blockquote).should.have.length(1);
  });

  it("Shouldn't add <Blockquote>", () => {
    const message = 'Bonjour, > Je suis une quote';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Blockquote).should.have.length(0);
  });
});
