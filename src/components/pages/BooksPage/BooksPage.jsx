import React, { Component } from 'react';

class BooksPage extends Component {
    renderList() {

    const {books, actions: {selectBook}} = this.props;
    
        return books && books.map((book) => {
            return (
                <li  
                onClick={() => selectBook(book)}
                key={book.title} 
                className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    componentDidMount() {
        const { actions: {bookList}} = this.props;
        bookList();
    }

    render() {
        return (
            <div>
                <h1>List of Books </h1>
                <ul className="list-group col-sm-12">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

export default BooksPage;