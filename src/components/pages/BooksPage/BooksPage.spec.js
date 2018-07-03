import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import BooksPage from './BooksPage.jsx';

describe('components/pages/BooksPage.jsx', () => {
  let component, instance;
  const pushHistory = sinon.spy();

  const shallowComponent = (props) => {
    return shallow(
        <BooksPage
            {...props}
        />
    );
  };

  beforeEach(() => {
    component = shallowComponent({
      actions: {
        pushHistory,
      }
    });

    instance = component.instance();
  });

  it('should render without any error', () => {
    expect(component).to.exist;
  });
});