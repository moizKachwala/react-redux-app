import React, { Component } from 'react';
import {Link} from 'react-router';

import './DashboardPage.scss';

class DashboardPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { actions: {bookList}} = this.props;
        bookList();
    }

    selectBook(book) {
        const {actions: {pushHistory}} = this.props;
        pushHistory(`/books/${book.id}`);
    }

    renderCards() {
    const {books} = this.props;
        return books && books.map((book) => {
            return (
                <div className="card-deck" key={book.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text">{book.pages}</p>
                            <Link to={`/books/${book.id}`}>Edit Book</Link>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="dashboard-page">
                <h1>Top Books </h1>
                {this.renderCards()}
            </div>
        );
    }
}

export default DashboardPage;
