/*
 * Package Import
 */
import React from 'react';
import { should } from 'chai';
import { mount } from 'enzyme';
import Highlighter from 'react-syntax-highlighter';

/*
 * Local Import
 */
import { Formatizer } from 'src';
import Highlight from 'src/components/Piece/Highlight';
import Spoil from 'src/components/Piece/Spoil';

/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/components/Piece/Highlight.js **', () => {
  it('should add <Highlight /> for a Snippet with language', () => {
    const message = 'Bonjour, ```js const a = "je suis un snippet"; ```';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Highlight);
    component.should.have.length(1);
    component
      .find(Highlighter)
      .props()
      .should.have.property('language')
      .which.is.equal('js');
  });

  it('should add <Highlight /> for a Snippet without language', () => {
    const message = 'Bonjour, ``` coucou ```';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Highlight);
    component.should.have.length(1);
    component
      .find(Highlighter)
      .props()
      .should.not.have.property('language');
  });

  it('should manage many snippets and newlines', () => {
    const message = `Bonjour,
      Lorem ipsum
      \`\`\` coucou \`\`\` !
      \`\`\`js
      const variable = "je suis un snippet";
      console.log(variable);
      \`\`\`
    `;
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Highlight).should.have.length(2);
  });

  it('should correctly display a snippet with space before code', () => {
    const message = '```\n  coucou```';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Highlight);

    component
      .find(Highlighter)
      .props()
      .should.have.property('children')
      .which.be.equal('  coucou');
  });

  it('should correctly display a snippet with language and space before code', () => {
    const message = '```javascript\n  coucou```';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Highlight);

    // Language
    component
      .find(Highlighter)
      .props()
      .should.have.property('language')
      .which.is.equal('javascript');

    // Text
    component
      .find(Highlighter)
      .props()
      .should.have.property('children')
      .which.be.equal('  coucou');
  });

  it('should display lineNumbers if lines > 1', () => {
    const message = '```\ncoucou\nHello\n```';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Highlight);
    component
      .find(Highlighter)
      .props()
      .should.have.property('showLineNumbers')
      .which.be.equal(true);
  });

  it('should not display lineNumbers if lines === 1', () => {
    const message = '``` coucou ```';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Highlight);
    component
      .find(Highlighter)
      .props()
      .should.not.have.property('showLineNumbers');
  });

  it('should not display lineNumbers if we have breakline', () => {
    const message = '```\ncoucou\n```';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Highlight);
    component
      .find(Highlighter)
      .props()
      .should.not.have.property('showLineNumbers');
  });

  it.skip('Should display 3 backticks if wrapped into 4', () => {
    const message = '````\n```\ncoucou\n```\n````';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Highlight);

    // Only one <Highlight />
    component.should.have.length(1);

    // Content with triple backkticks
    component
      .find(Highlighter)
      .props()
      .should.have.property('children')
      .which.be.equal('```\ncoucou\n```');
  });

  it.skip('should add ### in <Highlight /> without <Spoil />', () => {
    const message = '```###\nHello\n###```';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Spoil);

    // Should not have any <Spoil />
    component.should.have.length(0);

    // Should have <Highlight />
    component.find(Highlight).should.have.length(1);
  });
});
