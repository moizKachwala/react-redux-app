import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from '../../common/Button';
import { Table } from '../../common/Table';

class BooksPage extends Component {

    constructor(props) {
        super(props);

        this.handleAddBook = this.handleAddBook.bind(this);
    }

    componentDidMount() {
        const { actions: { bookList } } = this.props;
        bookList();
    }

    selectBook(book) {
        const { actions: { pushHistory } } = this.props;
        pushHistory(`/books/${book.id}`);
    }

    renderList() {
        const { books } = this.props;
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

    handleAddBook() {
        const { actions: { pushHistory } } = this.props;
        pushHistory("/books/new");
    }

    render() {
        const {books} = this.props;
        const fields = ['Title', 'Pages'];
        return (
            <div className="books-page">
                <div className="row justify-content-end">
                    <div className="col-2">
                        <Button theme="primary" onClick={this.handleAddBook}>Add Book</Button>
                    </div>
                </div>
                <div className="row">
                    <h1>List of Books</h1>
                    <Table
                        fields={fields}
                        data={books}
                    />
                </div>
            </div>
        );
    }
}

export default BooksPage;
