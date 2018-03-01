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
import { isMention, isMentionMe } from './utils';
/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/components/Piece/Mention.js **', () => {
  it('Should add a <Mention /> without any props', () => {
    const message = 'I am @mention ';
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

  it('Should not add a <Mention />', () => {
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
    const message = 'I am a @machine_123 abc';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Mention).should.have.length(1);
    wrapper
      .find(Mention)
      .text()
      .should.be.equal('@machine_123');
    wrapper
      .find(Mention)
      .text()
      .should.not.be.equal('@machine_123 abc');
  });

  it('Should add a <Mention /> with props isMention', () => {
    const message = 'You are a @randomPerson';
    const wrapper = mount(
      <Formatizer isMention={isMention} isMentionMe={isMentionMe}>
        {message}
      </Formatizer>,
    );
    wrapper.find(Mention).should.have.length(1);
    wrapper.find(Style).should.have.length(1);
  });

  it('Should not add a <Mention /> with props isMention', () => {
    const message = 'You are a @randomPerson';
    const wrapper = mount(
      <Formatizer isMention={isMention} isMentionMe={isMentionMe}>
        {message}
      </Formatizer>,
    );
    wrapper.find(Mention).should.have.length(1);
    wrapper.find(Style).should.have.length(1);
  });

  it("Should add a <Mention> with special style if we're mentionned", () => {
    const message = 'Hello @myself !';
    const wrapper = mount(
      <Formatizer isMention={isMention} isMentionMe={isMentionMe}>
        {message}
      </Formatizer>,
    );
    wrapper.find(Mention).should.have.length(1);
    wrapper.find(StyleMention).should.have.length(1);
  });
});
