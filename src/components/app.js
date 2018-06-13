import React, { Component } from 'react';
import {BooksPage} from './pages/BooksPage';
import {BookDetail} from './pages/BooksPage/BookDetail';

export default class App extends Component {
  render() {
    return (
      <div className="col-md-12">
          <div className="col-md-4">
              <BooksPage />
          </div>
          <div className="col-md-4">
              <BookDetail />
          </div>
      </div>
    )
  }
}