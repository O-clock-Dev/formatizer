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
import Code from 'src/components/Piece/Code';
import Emoji from 'src/components/Piece/Emoji';

/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/components/Piece/Code.js **', () => {
  it('Should add a <Code /> when pair of Backtick', () => {
    const message = 'Bonjour, je suis un `code` :)';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Code).should.have.length(1);
  });

  it('Should add <Code /> for each pair of Backtick', () => {
    const message = 'Bonjour, `je` suis un `code` :)';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Code).should.have.length(2);
    wrapper.find(Emoji).should.have.length(1);
  });

  it("Shouldn't add <Emoji /> in <Code />", () => {
    const message = 'Bonjour, je suis un `code :)`';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Code).should.have.length(1);
    wrapper.find(Emoji).should.have.length(0);
  });

  it("Shouldn't add <Code /> if multiple line", () => {
    const message = 'Bonjour, je suis un `\ncode\n`';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Code).should.have.length(0);
  });

  it("Shouldn't have ` in text", () => {
    const message = 'Bonjour, je suis un `code`';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper
      .find(Code)
      .text()
      .should.not.be.equal('`code`');
  });
});
