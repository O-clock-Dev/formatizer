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
import Format from 'src/components/Format';
import Spoil from 'src/components/Piece/Spoil';
import Highlight from 'src/components/Piece/Highlight';

/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/components/Piece/Spoil.js **', () => {
  it('should add <Spoil />', () => {
    const message = 'Bonjour, ###je suis un spoiler###';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Spoil);
    component.should.have.length(1);
  });

  it('Should have `Spoil` with text `Spoiler`', () => {
    const message = 'Bonjour, ###je suis un spoiler###';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Spoil);

    component
      .find('[data-id="summary"]')
      .text()
      .should.be.equal('Spoiler');
  });

  it('Should have text `Je suis un spoiler`', () => {
    const message = 'Bonjour, ###je suis un spoiler###';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Spoil);

    component
      .find('[data-id="content"]')
      .text()
      .should.be.equal('je suis un spoiler');
  });

  it('should manage many Spoils and newlines', () => {
    const message = `Bonjour,
      Lorem ipsum
      ### coucou ### !
      ###
      second spoiler
      ###
    `;
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Spoil).should.have.length(2);
  });

  it('should correctly display a <Spoil /> with space before ###', () => {
    const message = '###\n  coucou###';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Spoil);

    component
      .find(Format)
      .props()
      .should.have.property('children')
      .which.be.equal('  coucou');
  });

  it('should add <Highlight /> in <Spoil />', () => {
    const message = '### ```js const a = "je suis un snippet"; ``` ###';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Spoil);

    // Should have <Spoil />
    component.should.have.length(1);

    // Should have <Highlight />
    component.find(Highlight).should.have.length(1);
  });

  it('should have an `isOpen` property which are `false` by default', () => {
    const message = '### coucou ###';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    const component = wrapper.find(Spoil);

    // By default the spoiler should be closed
    component.state('isOpen').should.be.equal(false);
  });

  it('should be open when the options property is set', () => {
    const message = '### coucou ###';
    const wrapper = mount(
      <Formatizer
        options={{
          spoiler: {
            open: true,
          },
        }}
      >
        {message}
      </Formatizer>,
    );
    const component = wrapper.find(Spoil);

    // You can change the display by setting the options
    component.state('isOpen').should.be.equal(true);
  });
});
