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
import Smiley from 'src/components/Piece/Emoji/smiley';
import Colon from 'src/components/Piece/Emoji/colon';
import Blockquote from 'src/components/Piece/Blockquote';
import TextFormat from 'src/components/Piece/TextFormat';

/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/components/Piece/Emoji.js **', () => {
  describe('** Colons **', () => {
    it('should doesn’t format :test: in <Emoji />', () => {
      const message = ':test:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);

      wrapper
        .find(Emoji)
        .text()
        .should.be.equal(':test:');
    });

    it('should format :sunglasses: in <Colon />', () => {
      const message = ':sunglasses:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);

      wrapper.find(Colon).should.have.length(1);
    });

    it('should format :+1: 👍 in <Colon />', () => {
      const message = ':+1:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);

      wrapper.find(Colon).should.have.length(1);
    });

    it('should format :+1::skin-tone-6: 👍🏿 in <Colon />', () => {
      const message = ':+1::skin-tone-6:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);

      wrapper.find(Colon).should.have.length(1);
      wrapper.find(Colon).should.not.have.length(2);
    });

    it('should format multiple Emoji 😎 ☀️ in <Colon />', () => {
      const message = ':sunglasses: :sunny:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Colon).should.have.length(2);
    });

    it('should format multiple Emoji without space 😎 ☀️ in <Colon />', () => {
      const message = ':sunglasses::sunny:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Colon).should.have.length(2);
    });

    it('should format multiple tone Emoji  👍🏿 👎🏻  in <Colon />', () => {
      const message = ':+1::skin-tone-6: :-1::skin-tone-3:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Colon).should.have.length(2);
    });
  });

  describe('** Smileys **', () => {
    // sunglasses
    it('should format smiley 8-) 😎 in <Smiley />', () => {
      // 8-)
      let message = '8-)';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);

      wrapper.find(Smiley).should.have.length(1);

      // 8)
      message = '8)';
      wrapper = mount(<Formatizer>{message}</Formatizer>);

      wrapper.find(Smiley).should.have.length(1);
    });

    // neutral_face
    it('should format smiley :-| 😐 in <Smiley />', () => {
      let message = ':-|';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);

      wrapper.find(Smiley).should.have.length(1);

      message = ':|';
      wrapper = mount(<Formatizer>{message}</Formatizer>);

      wrapper.find(Smiley).should.have.length(1);
    });

    // monkey_face
    it('should format smiley :o) 🐵 in <Smiley />', () => {
      const message = ':o)';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
    });

    // grinning
    it('should format smiley =-) 😃 in <Smiley />', () => {
      let message = '=-)';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = '=)';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
    });

    // grin
    it('should format smiley :-D 😄 in <Smiley />', () => {
      let message = ':-D';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ':D';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
    });

    // wink
    it('should format smiley ;-) 😉 in <Smiley />', () => {
      let message = ';-)';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ';)';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
    });

    // laughing
    it('should format smiley :-> 😆 in <Smiley />', () => {
      let message = ':->';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ':>';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
    });

    // open_mouth
    it('should format smiley :-o 😮 in <Smiley />', () => {
      let message = ':-o';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ':o';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ':-O';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ':O';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
    });

    // no_mouth
    it('should format smiley :-x 😶 in <Smiley />', () => {
      let message = ':-x';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ':x';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ':-X';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ':X';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
    });

    // angry
    it('should format smiley >:-( 😠 in <Smiley />', () => {
      let message = '>:-(';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
      wrapper.find(Blockquote).should.have.length(1);

      message = 'test >:(';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
    });

    // slightly_smiling_face
    it('should format smiley :-) 🙂 in <Smiley />', () => {
      let message = ':-)';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ':)';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
    });

    // disappointed
    it('should format smiley :-( 😞 in <Smiley />', () => {
      let message = ':-(';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ':(';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
    });

    // confused
    it('should format smiley :-/ 😕 in <Smiley />', () => {
      let message = ':-/';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ':/';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
    });

    // yum
    it('should format smiley :-p 😋 in <Smiley />', () => {
      let message = ':-p';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ':p';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ':-P';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ':P';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
    });

    // kiss
    it('should format smiley :-* 💋 in <Smiley />', () => {
      let message = ':-*';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);

      message = ':*';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
    });

    it('should format smiley :-* text in <Smiley />, not in <TextFormat />', () => {
      let message = ':-* test*';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
      wrapper.find(TextFormat).should.have.length(0);

      message = ':* message :*';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(2);
      wrapper.find(TextFormat).should.have.length(0);
    });

    // Cry
    it("should format smiley :'( 😢 in <Smiley />", () => {
      const message = ":'(";
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
    });

    // fearful
    it('should format smiley D: 😧 in <Smiley />', () => {
      const message = 'D:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(1);
    });
  });

  describe('** Multiple **', () => {
    it('should format multiple smileys with spaces in <Smiley />', () => {
      const message = ':-) :-D\n :)\n\n\n:(';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Smiley).should.have.length(4);
    });

    it('should have multiple <br> with spaces in <Smiley />', () => {
      const message = ':-) :-D\n :)\n\n\n:(';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find('br').should.have.length(3);
    });

    it('should format multiple smileys without space in <Smiley />', () => {
      const message = ':):-):)';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);

      wrapper.find(Smiley).should.have.length(3);
    });

    it('should format smileys in <Smiley /> inside of <TextFormat />', () => {
      const message = '*test :) :( test*';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);

      wrapper.find(Smiley).should.have.length(2);
      wrapper.find(TextFormat).should.have.length(1);
    });
  });
});
