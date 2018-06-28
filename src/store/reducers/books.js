import {createReducer} from '../../util';
import {BOOKS_LIST, BOOK_SELECTED} from '../actions/index';

const initialState = {
    data : [],
    selectedBook: null,
};

export default createReducer(initialState, {

    [BOOKS_LIST]: (state, payload) => ({ ...state, data: [
        { id: 1, title: 'Javascript The good parts', pages: 100 },
        { id: 2, title: 'Harry Potter', pages: 239 },
        { id: 3, title: 'The dark Hour', pages: 200 },
        { id: 4, title: 'Nothing Specific', pages: 789 }
    ]}),

    [BOOK_SELECTED]: (state, payload) => ({
        ...state, selectedBook: payload
    })
});
