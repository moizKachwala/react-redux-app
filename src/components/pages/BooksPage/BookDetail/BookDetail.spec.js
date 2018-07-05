import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import BookDetail from './BookDetail.jsx';

describe('components/pages/BookPage/BookDetail', () => {
    let component;

    const shallowComponent = (props) => {
        return shallow(
            <BookDetail
                {...props}
            />
        );
    };

    beforeEach(() => {
        component = shallowComponent();
    });
    
    it('should render without any error', () => {
        expect(component).to.exist;
    });

    it('should display please select if book not found', () => {
        expect(component.find('div').text()).to.have.string('Please select atleast one book');
    });

    it('should display details of the book if book is present', () => {
        component.setProps({selectedBook: {id:1, title:'moiz', pages:30}});
        expect(component.find('h1').text()).to.have.string(`Title: moiz`);
    });
});