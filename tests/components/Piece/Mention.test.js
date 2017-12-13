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
import Mention from 'src/components/Piece/Mention';
import { Style, StyleMention } from 'src/components/Piece/Mention/style';

/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/components/Piece/Mention.js **', () => {
  it('Should add a <Mention />', () => {
    const message = 'Je suis une @mention ';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Mention).should.have.length(1);
    wrapper
      .find(Mention)
      .text()
      .should.be.equal('@mention');
    wrapper
      .find(Mention)
      .text()
      .should.not.be.equal('@mention ');
  });

  it.skip("Shouldn't add a <Mention />", () => {
    const message = 'test@mention ';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Mention).should.have.length(0);
  });

  it('Should add many <Mention />', () => {
    const message = '@mention @mention ';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Mention).should.have.length(2);
  });

  it('Should add a <Mention /> for a name with special char like _', () => {
    const message = 'Je suis une @une_mention_123 abc';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Mention).should.have.length(1);
    wrapper
      .find(Mention)
      .text()
      .should.be.equal('@une_mention_123');
    wrapper
      .find(Mention)
      .text()
      .should.not.be.equal('@une_mention_123 abc');
  });

  it('Should add a <Mention /> for @question', () => {
    const message = 'Je suis une @une_mention_123';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Mention).should.have.length(1);
    wrapper.find(Style).should.have.length(1);
  });

  it("Should add a <Mention> with special style if we're mentionned", () => {
    const isMention = mention => mention === 'test_mention';
    const message = 'Hello @test_mention !';
    const wrapper = mount(
      <Formatizer isMention={isMention}>{message}</Formatizer>,
    );
    wrapper.find(Mention).should.have.length(1);
    wrapper.find(StyleMention).should.have.length(1);
  });
});
