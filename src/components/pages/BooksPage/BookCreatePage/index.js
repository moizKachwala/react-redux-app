import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push as pushHistory} from 'react-router-redux';

import BookCreatePageComponent from './BookCreatePage.jsx';
import bookCreateForm from '../../../../store/forms/bookCreateForm';
import * as bookActions from '../../../../store/actions/books';

const selectedBook = (paramId, collection) => collection.find(({id}) => id === paramId);

export const BookCreatePage = connect(
    (state, props) => ({
        selectedBook: selectedBook(parseInt(props.params.id), state.books.data),
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            bookActions,
            pushHistory,
        }, dispatch)
    })
)(bookCreateForm(BookCreatePageComponent));
