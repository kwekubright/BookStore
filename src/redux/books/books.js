export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';

export const initialState = {
  books: [
    {
      id: 1,
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      category: 'Fantasy',
      progress: 50,
    },
    {
      id: 2,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      category: 'Fantasy',
      progress: 100,
    },
    {
      id: 3,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      category: 'Fantasy',
      progress: 0,
    },
  ],
};

export default function booksReducer(state = initialState.books, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case EDIT_BOOK:
      return state.map((book) => {
        if (book.id === action.book.id) {
          return action.book;
        }
        return book;
      });
    default:
      return state;
  }
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

export function editBook(id, book) {
  return {
    type: EDIT_BOOK,
    id,
    book,
  };
}
