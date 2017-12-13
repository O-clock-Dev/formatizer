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
import Emoji from 'src/components/Piece/Emoji';
import Blockquote from 'src/components/Piece/Blockquote';

/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/components/Piece/Emoji.js **', () => {
  describe('** Colons **', () => {
    it('Should format :sunglasses:  in  <Emoji />', () => {
      const message = ':sunglasses:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    it('Should format :+1: 👍 in <Emoji />', () => {
      const message = ':+1:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    it('Should format :thumbsup_tone5: 👍🏿 in <Emoji />', () => {
      const message = ':thumbsup_tone5:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    it('Should format multiple Emoji 😎 ☀️ in <Emoji />', () => {
      const message = ':sunglasses: :sunny:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(2);
    });

    it('Should format multiple Emoji without space 😎 ☀️ in <Emoji />', () => {
      const message = ':sunglasses::sunny:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(2);
    });

    it('Should format multiple tone Emoji  👍🏿 👎🏻  in <Emoji />', () => {
      const message = ':thumbsup_tone5: :-1_tone2:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(2);
    });
  });

  describe('** Smileys **', () => {
    // sunglasses
    it('Should format smiley 8-) 😎 in <Emoji />', () => {
      let message = '8-)';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = '8)';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // neutral_face
    it('Should format smiley :-| 😐 in <Emoji />', () => {
      let message = ':-|';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':|';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // monkey_face
    it('Should format smiley :o) 🐵 in <Emoji />', () => {
      const message = ':o)';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // grinning
    it('Should format smiley =-) 😃 in <Emoji />', () => {
      let message = '=-)';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = '=)';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // grin
    it('Should format smiley :-D 😄 in <Emoji />', () => {
      let message = ':-D';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':D';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // wink
    it('Should format smiley ;-) 😉 in <Emoji />', () => {
      let message = ';-)';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ';)';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // laughing
    it('Should format smiley :-> 😆 in <Emoji />', () => {
      let message = ':->';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':>';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // open_mouth
    it('Should format smiley :-o 😮 in <Emoji />', () => {
      let message = ':-o';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':o';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':-O';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':O';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // no_mouth
    it('Should format smiley :-x 😶 in <Emoji />', () => {
      let message = ':-x';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':x';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':-X';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':X';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // angry
    it('Should format smiley >:-( 😠 in <Emoji />', () => {
      let message = '>:-(';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
      wrapper.find(Blockquote).should.have.length(1);

      message = 'test >:(';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // slightly_smiling_face
    it('Should format smiley :-) 🙂 in <Emoji />', () => {
      let message = ':-)';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':)';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // disappointed
    it('Should format smiley :-( 😞 in <Emoji />', () => {
      let message = ':-(';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':(';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // confused
    it('Should format smiley :-/ 😕 in <Emoji />', () => {
      let message = ':-/';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':/';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // yum
    it('Should format smiley :-p 😋 in <Emoji />', () => {
      let message = ':-p';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':p';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':-P';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':P';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // kiss
    it('Should format smiley :-* 💋 in <Emoji />', () => {
      let message = ':-*';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':*';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // Cry
    it("Should format smiley :'( 😢 in <Emoji />", () => {
      const message = ":'(";
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // fearful
    it('Should format smiley D: 😧 in <Emoji />', () => {
      const message = 'D:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    it('Should format multiple smileys with spaces in <Emoji />', () => {
      const message = ':-) :-D\n :)\n\n\n:(';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
      wrapper
        .find(Emoji)
        .render()
        .find('svg')
        .should.have.length(4);
      wrapper
        .find(Emoji)
        .render()
        .find('br')
        .should.have.length(3);
    });

    it('Should format multiple smileys without space in <Emoji />', () => {
      const message = ':):-):)';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper
        .find(Emoji)
        .render()
        .find('svg')
        .should.have.length(3);
    });
  });
});
