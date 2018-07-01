import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import BooksReducer from './books';

const rootReducer = combineReducers({
  books: BooksReducer,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
