import React, { Component } from 'react';

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

    renderList() {
    const {books} = this.props;
        return books && books.map((book) => {
            return (
                <div className="tile job" key={book.id}>
                    <div className="header">
                      <div className="count">1</div>
                      <div className="title">Jobs</div>
                    </div>
                    <div className="body">
                      <div className="title">Awaiting Reallocation</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="dashboard-page">
                <h1>Top Books </h1>
                <ul className="list-group col-sm-12">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

export default DashboardPage;
