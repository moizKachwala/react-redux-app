import {connect} from 'react-redux';
import BookDetailComponent from './BookDetail';

export const BookDetail = connect(
    (state) => ({
        selectedBook: state.books.selectedBook
    })
)(BookDetailComponent);