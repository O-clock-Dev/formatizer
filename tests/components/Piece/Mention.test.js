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

    // Should have a text `@mention`
    wrapper
      .find(Mention)
      .text()
      .should.be.equal('@mention');

    // Should not have a space in text
    wrapper
      .find(Mention)
      .text()
      .should.not.be.equal('@mention ');
  });

  it('should not add a <Mention />', () => {
    const message = 'test@mention ';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Mention).should.have.length(0);
  });

  it('should add many <Mention />', () => {
    const message = '@mention @mention ';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Mention).should.have.length(2);
  });

  it('Should add a <Mention /> for a name with special char like _', () => {
    const message = 'I am a @machine_123 abc';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Mention).should.have.length(1);

    // Should have a text `@machine_123`
    wrapper
      .find(Mention)
      .text()
      .should.be.equal('@machine_123');

    // Should not have more characters after a mention
    wrapper
      .find(Mention)
      .text()
      .should.not.be.equal('@machine_123 abc');
  });

  it('should add a <Mention /> with an accent in username ', () => {
    const message = 'Hello @Céline ';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);

    wrapper.find(Mention).should.have.length(1);

    // Mention should be `@Céline`
    wrapper
      .find(Mention)
      .text()
      .should.be.equal('@Céline');

    // Not `@C`
    wrapper
      .find(Mention)
      .text()
      .should.not.be.equal('@C');
  });

  it('should add a <Mention /> with an apostrophe in username ', () => {
    const message = "Hello @hanto-art'soa !";
    const wrapper = mount(<Formatizer>{message}</Formatizer>);

    wrapper.find(Mention).should.have.length(1);

    // Mention should be `@hanto-art'soa`
    wrapper
      .find(Mention)
      .text()
      .should.be.equal("@hanto-art'soa");

    // Not `@hanto-art`
    wrapper
      .find(Mention)
      .text()
      .should.not.be.equal('@hanto-art');
  });

  it.skip('should add a <Mention /> with a space in username ', () => {
    const message = 'Hello @Loic S !';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);

    wrapper.find(Mention).should.have.length(1);

    // Mention should be `@Loic S`
    wrapper
      .find(Mention)
      .text()
      .should.be.equal('@Loic S');

    // Not `@Loic`
    wrapper
      .find(Mention)
      .text()
      .should.not.be.equal('@Loic');
  });

  it('should add a <Mention /> with comma pasted at mention', () => {
    const message = 'Hello @alex, comment ça va?';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);

    wrapper.find(Mention).should.have.length(1);

    // Mention should be `@alex`
    wrapper
      .find(Mention)
      .text()
      .should.be.equal('@alex');

    // But, without comma in Mention
    wrapper
      .find(Mention)
      .text()
      .should.not.be.equal('@alex,');
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
