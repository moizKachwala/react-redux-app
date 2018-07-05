import React, {Component} from 'react';

class BookDetail extends Component {
    render() {

        const {selectedBook} = this.props;

        if(!selectedBook) {
            return (
                <div>Please select atleast one book</div>
            );
        }

        return (
            <div>
                <h3>Details for : </h3>
                <h1>Title: {selectedBook.title}</h1>
                <div>Pages: {selectedBook.pages}</div>
            </div>
        );
    }
}

export default BookDetail;
