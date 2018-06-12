import React, { Component } from 'react';
import BooksPage from './pages/BooksPage/booksPage.jsx';
import BookDetail from './pages/BooksPage/BookDetail/bookDetail.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="col-md-12">
          <div className="col-md-4">
              <BooksPage />
          </div>
          <div className="col-md-6">
              <BookDetail />
          </div>
      </div>
    )
  }
}