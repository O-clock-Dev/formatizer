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
  it('should add a <Code /> when pair of Backtick', () => {
    const message = 'Bonjour, je suis un `code` :)';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Code).should.have.length(1);
  });

  it('should add <Code /> for each pair of Backtick', () => {
    const message = 'Bonjour, `je` suis un `code` :)';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Code).should.have.length(2);
    wrapper.find(Emoji).should.have.length(1);
  });

  it('should not add <Emoji /> in <Code />', () => {
    const message = 'Bonjour, je suis un `code :)`';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);

    // No <Emoji />
    wrapper.find(Emoji).should.have.length(0);

    // One <Code />
    const code = wrapper.find(Code);
    code.should.have.length(1);
    code.text().should.be.equal('code :)');
  });

  it('should add <Code /> if new line at the end', () => {
    const message = 'Bonjour, je suis un `code\n`';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);

    // should add <Code />
    const code = wrapper.find(Code);
    code.should.have.length(1);

    // Newline should be gone
    code.text().should.be.equal('code');
  });

  it('should not add <Code /> if multiple line', () => {
    const message = 'Bonjour, je suis un `\ncode\n`';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Code).should.have.length(0);
  });

  it('should not have ` in text', () => {
    const message = 'Bonjour, je suis un `code`';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper
      .find(Code)
      .text()
      .should.not.be.equal('`code`');
  });
});
