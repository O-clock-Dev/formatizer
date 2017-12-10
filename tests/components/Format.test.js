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
import {
  Blockquote,
  Bold,
  Code,
  Italic,
  Link,
  Mention,
  Strike,
} from 'src/components/Piece';

/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/components/Format.js **', () => {
  it('Should be display a simple Text', () => {
    const message = 'test';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper
      .text()
      .should.be.a('string')
      .which.be.equal('test');
  });

  it('Should format a string in <Bold />', () => {
    const message = '*test*';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Bold).should.have.length(1);
  });

  it('Should format a string in <Italic />', () => {
    const message = '_test_';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Italic).should.have.length(1);
  });

  it('Should format a string in <Strike />', () => {
    const message = '~test~';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Strike).should.have.length(1);
  });

  it('Should add a <Mention />', () => {
    const message = 'Je suis une @mention';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Mention).should.have.length(1);
  });

  it('Should format a string with many Piece', () => {
    const message = '*_test_*';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Bold).should.have.length(1);
    wrapper.find(Italic).should.have.length(1);
  });

  it('Should format multiple string', () => {
    const message = '*un* _deux_';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);

    wrapper.find(Bold).should.have.length(1);
    wrapper.find(Italic).should.have.length(1);
  });

  it('Should add a <Code /> when pair of Backtick', () => {
    const message = 'Bonjour, je suis un `code` :)';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Code).should.have.length(1);
  });

  it('Should add <Code /> for each pair of Backtick', () => {
    const message = 'Bonjour, `je` suis un `code` :)';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Code).should.have.length(2);
  });

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

  it('Should DID NOT add <Link /> if link is fail', () => {
    const message = 'Bonjour, http//oclock.io';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Link).should.have.length(0);
  });

  it('Should add <Blockquote> for a Quote', () => {
    const message = '> Bonjour, Je suis une quote';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Blockquote).should.have.length(1);
  });
});
