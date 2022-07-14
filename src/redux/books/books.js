export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const initialState = {
  books: [
    {
      id: '1',
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      category: 'Fantasy',
      progress: 50,
    },
    {
      id: '2',
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      category: 'Fantasy',
      progress: 100,
    },
    {
      id: '3',
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
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}
