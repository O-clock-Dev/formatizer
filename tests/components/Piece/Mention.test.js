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
  const users = [
    { id: 0, mention: 'carine' },
    { id: 1, mention: 'someone_else_123' },
  ];
  const isMention = (mention) => {
    const userFound = users.find(user => mention === user.mention);
    return mention === userFound.mention;
  };

  const isMentionMe = mention => mention === 'carine' || mention === 'question';

  it('Should add a <Mention />', () => {
    const message = 'Je suis @carine ';
    const wrapper = mount(
      <Formatizer isMention={isMention} isMentionMe={isMentionMe}>
        {message}
      </Formatizer>,
    );
    wrapper.find(Mention).should.have.length(1);
    wrapper
      .find(Mention)
      .text()
      .should.be.equal('@carine');
    wrapper
      .find(Mention)
      .text()
      .should.not.be.equal('@carine ');
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
    const message = 'Je suis une @someone_else_123 abc';
    const wrapper = mount(
      <Formatizer isMention={isMention} isMentionMe={isMentionMe}>
        {message}
      </Formatizer>,
    );
    wrapper.find(Mention).should.have.length(1);
    wrapper
      .find(Mention)
      .text()
      .should.be.equal('@someone_else_123');
    wrapper
      .find(Mention)
      .text()
      .should.not.be.equal('@someone_else_123 abc');
  });

  it('Should add a <Mention /> for @question', () => {
    const message = 'Je suis une @question';
    const wrapper = mount(
      <Formatizer isMention={isMention} isMentionMe={isMentionMe}>
        {message}
      </Formatizer>,
    );
    wrapper.find(Mention).should.have.length(1);
    wrapper.find(Style).should.have.length(0);
  });

  it("Should add a <Mention> with special style if we're mentionned", () => {
    const message = 'Hello @carine !';
    const wrapper = mount(
      <Formatizer isMention={isMention} isMentionMe={isMentionMe}>
        {message}
      </Formatizer>,
    );
    wrapper.find(Mention).should.have.length(1);
    wrapper.find(StyleMention).should.have.length(1);
  });
});
