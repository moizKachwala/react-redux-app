import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import BooksReducer from './books';

const rootReducer = combineReducers({
  books: BooksReducer,
  routing: routerReducer,
});

export default rootReducer;