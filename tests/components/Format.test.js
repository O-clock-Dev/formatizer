/*
 * Package Import
 */
import React from 'react';
import { should } from 'chai';
import { mount } from 'enzyme';

/*
 * Local Import
 */

// Components
import Highlight from 'src/components/Highlight';
import Emoji from 'src/components/Emoji';
import Format from 'src';

// Style
import { Code, Link, Blockquote } from 'src/patterns/style';

/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/index.js **', () => {
  it('Should be display a simple Text', () => {
    const message = 'test';
    const wrapper = mount(<Format>{message}</Format>);

    wrapper.should.have.length(1);

    wrapper.text().should.be.a('string');
    wrapper.text().should.be.equal('test');
  });

  it('Should format a string', () => {
    // BOLD
    let message = '*test*';
    let wrapper = mount(<Format>{message}</Format>);

    wrapper
      .find('span')
      .first()
      .hasClass('bold')
      .should.equal(true);

    // ITALIC
    message = '_test_';
    wrapper = mount(<Format>{message}</Format>);
    wrapper
      .find('span')
      .first()
      .hasClass('italic')
      .should.equal(true);

    // STRIKE
    message = '~test~';
    wrapper = mount(<Format>{message}</Format>);
    wrapper
      .find('span')
      .first()
      .hasClass('strike')
      .should.equal(true);
  });

  it('Should format multiple string', () => {
    const message = '*un* _deux_';
    const wrapper = mount(<Format>{message}</Format>);

    // Each element formatted have 2 span
    // with className { bold / italic / strike }
    wrapper
      .find('span')
      .filter('.bold')
      .should.have.length(2);
    wrapper
      .find('span')
      .filter('.italic')
      .should.have.length(2);
  });

  it('Should add a <code> when pair of Backtick', () => {
    const message = 'Bonjour, je suis un `code` :)';
    const wrapper = mount(<Format>{message}</Format>);
    wrapper.find('code').should.have.length(1);
  });

  it('Should add <Code /> for each pair of Backtick', () => {
    const message = 'Bonjour, `je` suis un `code` :)';
    const wrapper = mount(<Format>{message}</Format>);
    wrapper.find(Code).should.have.length(2);
  });

  it('Should add <a> for a Link', () => {
    // https
    let message = 'Bonjour, https://oclock.io';
    let wrapper = mount(<Format>{message}</Format>);
    wrapper.find(Link).should.have.length(1);

    // http
    message = 'Bonjour, http://oclock.io';
    wrapper = mount(<Format>{message}</Format>);
    wrapper.find(Link).should.have.length(1);
  });

  it('Should dont add <a> if link is fail', () => {
    // Fail link
    const message = 'Bonjour, http//oclock.io';
    const wrapper = mount(<Format>{message}</Format>);
    wrapper.find(Link).should.have.length(0);
  });

  it('Should add <Highlight /> for a Snippet', () => {
    const message = 'Bonjour, ```js const a = "je suis un snippet"; ```';
    const wrapper = mount(<Format>{message}</Format>);
    wrapper.find(Highlight).should.have.length(1);
  });

  it('Should add <Highlight /> for a Snippet withou language', () => {
    const message = 'Bonjour, ``` coucou ```';
    const wrapper = mount(<Format>{message}</Format>);
    wrapper.find(Highlight).should.have.length(1);
  });

  it('Should add <blockquote> for a Quote', () => {
    const message = '> Bonjour, Je suis une quote';
    const wrapper = mount(<Format>{message}</Format>);
    wrapper.find(Blockquote).should.have.length(1);
  });

  it('Should add <Emoji /> for a Smiley', () => {
    const message = ':sunglasses:';
    const wrapper = mount(<Format>{message}</Format>);
    wrapper.find(Emoji).should.have.length(1);
  });

  it('Should add <Emoji /> for a :+1:', () => {
    const message = ':+1:';
    const wrapper = mount(<Format>{message}</Format>);
    wrapper.find(Emoji).should.have.length(1);
  });

  it('Should add <Emoji /> for a :+1::skin-tone-6:', () => {
    const message = ':+1::skin-tone-6:';
    const wrapper = mount(<Format>{message}</Format>);
    wrapper.find(Emoji).should.have.length(1);
  });

  it('Should add <Emoji /> for each Smileys and display text between the both', () => {
    const message = ':sunglasses: test :sunny:';
    const wrapper = mount(<Format>{message}</Format>);
    wrapper.find(Emoji).should.have.length(2);
    wrapper.text().should.be.a('string');
    wrapper.text().should.be.equal(' test ');
  });
});
