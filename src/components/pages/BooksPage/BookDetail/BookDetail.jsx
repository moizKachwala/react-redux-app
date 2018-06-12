import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {

        const {selectedBook} = this.props;


        if(!selectedBook) {
            return <div>Please select atleast one book </div>
        }

        return (
            <div>
                <h3>Details for : </h3>
                <div>Title: {selectedBook.title}</div>
                <div>Pages: {selectedBook.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedBook: state.books.selectedBook
    };
}

export default connect(mapStateToProps)(BookDetail);