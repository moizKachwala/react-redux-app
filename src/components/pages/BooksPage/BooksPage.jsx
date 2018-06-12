import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook, list} from '../../../store/actions';
import { bindActionCreators} from 'redux';

class BooksPage extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li  
                onClick={() => this.props.selectBook(book)}
                key={book.title} 
                className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    componentDidMount() {
        this.props.bookList();
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

function mapStateToProps(state) {
    return {
        books: state.books.data,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook: selectBook, bookList: list}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);