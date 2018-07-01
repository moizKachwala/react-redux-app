import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push as pushHistory} from 'react-router-redux';

import BooksPageComponent from './BooksPage.jsx';
import { selectBook, list} from '../../../store/actions/books';

export const BooksPage = connect(
    (state) => ({
        books: state.books.data
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            selectBook: selectBook,
            bookList: list,
            pushHistory,
        }, dispatch)
    })
)(BooksPageComponent);
