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
import Highlight from 'src/components/Piece/Highlight';

/*
 * Code
 */
should();

/*
 * Tests
 */
describe('** src/components/Piece/Character.js **', () => {
  it('Should add <Highlight /> for a Snippet', () => {
    const message = 'Bonjour, ```js const a = "je suis un snippet"; ```';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Highlight).should.have.length(1);
  });

  it('Should add <Highlight /> for a Snippet withou language', () => {
    const message = 'Bonjour, ``` coucou ```';
    const wrapper = mount(<Formatizer>{message}</Formatizer>);
    wrapper.find(Highlight).should.have.length(1);
  });
});
