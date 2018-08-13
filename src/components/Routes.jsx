import React, {Component} from 'react';
import {hashHistory, Router, Route, IndexRedirect} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from '../store';

import {DefaultLayout} from './layouts/DefaultLayout';
import {DashboardPage} from './pages/DashboardPage';
import {BookCreatePage} from './pages/BooksPage/BookCreatePage';
import {BooksPage} from './pages/BooksPage';
import {BookDetail} from './pages/BooksPage/BookDetail';

const history = syncHistoryWithStore(hashHistory, store);

class Routes extends Component {
    render() {
        return(
            <Router history={history}>
                <Route path="/" component={DefaultLayout}>
                    <IndexRedirect to="dashboard"/>

                    <Route path="dashboard" component={DashboardPage} />

                    <Route path="books" component={BooksPage} />
                    <Route path="books/new" mode="create" component={BookCreatePage} />
                    <Route path="books/:id" component={BookDetail} />
                </Route>
            </Router>
        );
    }
}

export {Routes};
