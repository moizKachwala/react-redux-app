import React, { Component } from 'react';
import {Link} from 'react-router';

class BooksPage extends Component {

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

    renderList() {
    const {books} = this.props;
        return books && books.map((book) => {
            return (
                <li
                onClick={() => this.selectBook(book)}
                key={book.title}
                className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Link to="books/new" className="btn btn-primary">Add new Book</Link>
                </div>
                <div className="row">
                    <h1>List of Books </h1>
                    <ul className="list-group col-sm-12">
                        {this.renderList()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default BooksPage;
