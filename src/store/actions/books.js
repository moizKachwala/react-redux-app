export const BOOK_SELECTED = 'BOOK_SELECTED';
export const BOOKS_LIST = 'BOOKS_LIST';
export const BOOKS_CREATE = 'BOOKS_CREATE';

export const selectBook = (book) => ({
    type: BOOK_SELECTED,
    payload: book
});

export const list = () => ({
    type: BOOKS_LIST,
});

export const create = (user,) => ({
    type: BOOKS_CREATE,
    payload: {user},
});
