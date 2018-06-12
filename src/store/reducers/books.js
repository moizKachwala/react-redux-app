import {createReducer} from '../../util';
import {BOOKS_LIST, BOOK_SELECTED} from '../actions/index';

const initialState = {
    data : [],
    selectedBook: null,
}

export default createReducer(initialState, {
    
    [BOOKS_LIST]: (state, payload) => ({ ...state, data: [
        { title: 'Javascript The good parts', pages: 100 },
        { title: 'Harry Potter', pages: 239 },
        { title: 'The dark Hour', pages: 200 },
        { title: 'Nothing Specific', pages: 789 }
    ]}),

    [BOOK_SELECTED]: (state, payload) => ({ 
        ...state, selectedBook: payload
    })
});