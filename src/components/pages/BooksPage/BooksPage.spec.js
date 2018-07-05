import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import BooksPage from './BooksPage.jsx';

describe('components/pages/BooksPage.jsx', () => {
  let component, instance;
  const pushHistory = sinon.spy();
  const bookList = sinon.spy();

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
        bookList,
      }
    });

    instance = component.instance();
  });

  it('should render without any error', () => {
    expect(component).to.exist;
  });

  it('should call componentDidMount', () => {
    instance.componentDidMount();
    expect(bookList.called).to.equal(true);
  });

  it('should select book and navigate to detail page', () => {
    const book = {id: 1};
    instance.selectBook(book);
    expect(pushHistory.called).to.equal(true);
    expect(pushHistory.lastCall.args[0]).to.deep.equal('/books/1');
  });
});