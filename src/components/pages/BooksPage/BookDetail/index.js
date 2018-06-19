import {connect} from 'react-redux';
import BookDetailComponent from './BookDetail.jsx';

export const BookDetail = connect(
    (state) => ({
        selectedBook: state.books.selectedBook
    })
)(BookDetailComponent);
