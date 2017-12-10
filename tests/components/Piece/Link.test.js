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
import Link from 'src/components/Piece/Link';
import Emoji from 'src/components/Piece/Emoji';

/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/components/Piece/Link.js **', () => {
  it('Should add <Link /> for a Link', () => {
    // https
    let message = 'Bonjour, https://oclock.io';
    let wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Link).should.have.length(1);

    // http
    message = 'Bonjour, http://oclock.io';
    wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Link).should.have.length(1);
  });

  it("Shouldn't add <Link /> if link is fail", () => {
    const message = 'Bonjour, http//oclock.io';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Link).should.have.length(0);
  });

  it("Shouldn't add <Emoji /> in <Link />", () => {
    const message = 'Bonjour, https://oclock.io';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Link).should.have.length(1);
    wrapper.find(Emoji).should.have.length(0);
  });
});
