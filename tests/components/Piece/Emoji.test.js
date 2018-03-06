/* eslint-disable max-len */
/*
 * Package Import
 */
import React from 'react';
import { should } from 'chai';
import { mount } from 'enzyme';

/*
 * Local Import
 */
import { Formatizer, setImagePath } from 'src';
import Emoji from 'src/components/Piece/Emoji';
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
    it('should format :sunglasses:  in  <Emoji />', () => {
      const message = ':sunglasses:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    it('should format :+1: 👍 in <Emoji />', () => {
      const message = ':+1:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    it('should format :thumbsup_tone5: 👍🏿 in <Emoji />', () => {
      const message = ':thumbsup_tone5:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    it('should format multiple Emoji 😎 ☀️ in <Emoji />', () => {
      const message = ':sunglasses: :sunny:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(2);
    });

    it('should format multiple Emoji without space 😎 ☀️ in <Emoji />', () => {
      const message = ':sunglasses::sunny:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(2);
    });

    it('should format multiple tone Emoji  👍🏿 👎🏻  in <Emoji />', () => {
      const message = ':thumbsup_tone5: :-1_tone2:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(2);
    });
  });

  describe('** Smileys **', () => {
    // sunglasses
    it('should format smiley 8-) 😎 in <Emoji />', () => {
      let message = '8-)';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = '8)';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // neutral_face
    it('should format smiley :-| 😐 in <Emoji />', () => {
      let message = ':-|';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':|';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // monkey_face
    it('should format smiley :o) 🐵 in <Emoji />', () => {
      const message = ':o)';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // grinning
    it('should format smiley =-) 😃 in <Emoji />', () => {
      let message = '=-)';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = '=)';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // grin
    it('should format smiley :-D 😄 in <Emoji />', () => {
      let message = ':-D';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':D';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // wink
    it('should format smiley ;-) 😉 in <Emoji />', () => {
      let message = ';-)';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ';)';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // laughing
    it('should format smiley :-> 😆 in <Emoji />', () => {
      let message = ':->';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':>';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // open_mouth
    it('should format smiley :-o 😮 in <Emoji />', () => {
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
    it('should format smiley :-x 😶 in <Emoji />', () => {
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
    it('should format smiley >:-( 😠 in <Emoji />', () => {
      let message = '>:-(';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
      wrapper.find(Blockquote).should.have.length(1);

      message = 'test >:(';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // slightly_smiling_face
    it('should format smiley :-) 🙂 in <Emoji />', () => {
      let message = ':-)';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':)';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // disappointed
    it('should format smiley :-( 😞 in <Emoji />', () => {
      let message = ':-(';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':(';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // confused
    it('should format smiley :-/ 😕 in <Emoji />', () => {
      let message = ':-/';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':/';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // yum
    it('should format smiley :-p 😋 in <Emoji />', () => {
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
    it('should format smiley :-* 💋 in <Emoji />', () => {
      let message = ':-*';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);

      message = ':*';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    it('should format smiley :-* text in <Emoji />, not in <TextFormat />', () => {
      let message = ':-* test*';
      let wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
      wrapper.find(TextFormat).should.have.length(0);

      message = ':* message :*';
      wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(2);
      wrapper.find(TextFormat).should.have.length(0);
    });

    // Cry
    it("should format smiley :'( 😢 in <Emoji />", () => {
      const message = ":'(";
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    // fearful
    it('should format smiley D: 😧 in <Emoji />', () => {
      const message = 'D:';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
    });

    it('should format multiple smileys with spaces in <Emoji />', () => {
      const message = ':-) :-D\n :)\n\n\n:(';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper.find(Emoji).should.have.length(1);
      wrapper
        .find(Emoji)
        .render()
        .find('img')
        .should.have.length(4);
      wrapper
        .find(Emoji)
        .render()
        .find('br')
        .should.have.length(3);
    });

    it('should format multiple smileys without space in <Emoji />', () => {
      const message = ':):-):)';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper
        .find(Emoji)
        .render()
        .find('img')
        .should.have.length(3);
    });

    it('should format smileys in <Emoji /> inside of <TextFormat />', () => {
      const message = '*test :) :( test*';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper
        .find(Emoji)
        .render()
        .find('img')
        .should.have.length(2);
      wrapper.find(TextFormat).should.have.length(1);
    });
  });

  describe('** Config **', () => {
    it('should render with local image if config has been set up', () => {
      const imagePath = '/path/to/fake-file.svg';
      setImagePath(imagePath);
      const message = ':)';
      const wrapper = mount(<Formatizer>{message}</Formatizer>);
      wrapper
        .find(Emoji)
        .render()
        .find('use')
        .get(0)
        // Begin with imagePath => indexOf(imagePath) === 0
        .attribs.href.indexOf(imagePath)
        .should.be.equal(0);
    });
  });
});
