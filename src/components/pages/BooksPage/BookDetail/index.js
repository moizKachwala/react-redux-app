import {connect} from 'react-redux';
import BookDetailComponent from './BookDetail.jsx';

const selectedBook = (paramId, collection) => collection.find(({id}) => id === paramId);

export const BookDetail = connect(
    (state, props) => ({
        selectedBook: selectedBook(parseInt(props.params.id), state.books.data),
    })
)(BookDetailComponent);
