import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push as pushHistory} from 'react-router-redux';

import DashboardPageComponent from './DashboardPage.jsx';
import { selectBook, list} from '../../../store/actions/books';

export const DashboardPage = connect(
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
)(DashboardPageComponent);
