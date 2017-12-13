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

  it('Should add <Link /> for a http://localhost:3000', () => {
    const message = 'Bonjour, http://localhost:3000';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Link).should.have.length(1);
    wrapper
      .find('a')
      .props()
      .should.have.a.property('href')
      .which.is.equal('http://localhost:3000');
  });

  it('Should add <Link /> for a http://127.0.0.1', () => {
    const message = 'Bonjour, http://127.0.0.1';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Link).should.have.length(1);
    wrapper
      .find('a')
      .props()
      .should.have.a.property('href')
      .which.is.equal('http://127.0.0.1');
  });

  it('Should add <Link /> for a https://checklist.oclock.io/checklist.php?id=1', () => {
    const message = 'Bonjour, https://checklist.oclock.io/checklist.php?id=1';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Link).should.have.length(1);
    wrapper
      .find('a')
      .props()
      .should.have.a.property('href')
      .which.is.equal('https://checklist.oclock.io/checklist.php?id=1');
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

  it("Shouldn't add last character in <Link />", () => {
    let message = 'Bonjour, https://oclock.io.';
    let wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Link).should.have.length(1);
    wrapper
      .find('a')
      .props()
      .should.have.a.property('href')
      .which.is.equal('https://oclock.io');

    message = 'Bonjour, https://oclock.io ';
    wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Link).should.have.length(1);
    wrapper
      .find('a')
      .props()
      .should.have.a.property('href')
      .which.is.equal('https://oclock.io');
  });

  it("Shouldn't add last character in <Link /> 2", () => {
    let message = 'Bonjour, https://oclock.io)';
    let wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Link).should.have.length(1);
    wrapper
      .find('a')
      .props()
      .should.have.a.property('href')
      .which.is.equal('https://oclock.io');

    message = 'Bonjour, https://oclock.io()';
    wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Link).should.have.length(1);
    wrapper
      .find('a')
      .props()
      .should.have.a.property('href')
      .which.is.equal('https://oclock.io');
  });

  it("Shouldn't add <Emoji /> in <Link />", () => {
    const message = 'http://:sunglasses:.com';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Link).should.have.length(1);
    wrapper.find(Emoji).should.have.length(0);
  });

  it("Should add <Link /> on url in '(url)'", () => {
    const message = 'Allez voir mon site (https://oclock.io) !';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Link).should.have.length(1);
    wrapper
      .find('a')
      .props()
      .should.have.a.property('href')
      .which.is.equal('https://oclock.io');
  });

  it('Should display many <Link />', () => {
    const message = 'Site 1(https://oclock.io), site 2 http://localhost:3000.';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Link).should.have.length(2);
  });
});
