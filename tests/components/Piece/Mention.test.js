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
import { StyleMention } from 'src/components/Piece/Mention/style';

/*
 * Init
 */
should();

/*
 * code
 */
const usersList = ['Alexandre', 'Carine', 'Maxime'];
const user = { id: 1, username: 'Alexandre' };

const isMentionMe = mention =>
  mention === user.username || mention === 'question';

const isMention = mention =>
  mention === 'question' || usersList.includes(mention);

const FormatizerMention = message => (
  <Formatizer isMention={isMention} isMentionMe={isMentionMe}>
    {message}
  </Formatizer>
);

/*
 * Tests
 */
describe('** src/components/Piece/Mention.js **', () => {
  it('Should add a <Mention />', () => {
    const message = 'Je suis une @mention ';
    const wrapper = mount(FormatizerMention(message));
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
    const wrapper = mount(FormatizerMention(message));
    wrapper.find(Mention).should.have.length(0);
  });

  it('Should add many <Mention />', () => {
    const message = '@mention @mention ';
    const wrapper = mount(FormatizerMention(message));
    wrapper.find(Mention).should.have.length(2);
  });

  it('Should add a <Mention /> for a name with special char like _', () => {
    const message = 'Je suis une @une_mention_123 abc';
    const wrapper = mount(FormatizerMention(message));
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

  it('Should add a <Mention /> with for @question', () => {
    const message = 'Je suis une @question';
    const wrapper = mount(FormatizerMention(message));
    wrapper.find(Mention).should.have.length(1);
    wrapper.find(StyleMention).should.have.length(1);
  });

  it("Should add a <Mention> with special style if we're mentionned", () => {
    const message = 'Hello @Alexandre !';
    const wrapper = mount(FormatizerMention(message));
    wrapper.find(Mention).should.have.length(1);
    wrapper.find(StyleMention).should.have.length(1);
  });
});
