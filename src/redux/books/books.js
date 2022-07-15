import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IwqaCSUuDvO1vsTarbgD/';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch(`${baseUrl}books`);
  const books = await response.json();
  return books;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await fetch(`${baseUrl}books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });

  const newBook = await response.text();
  return newBook;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const response = await fetch(`${baseUrl}books/${id}`, {
    method: 'DELETE',
  });
  const deletedBook = await response.text();
  return deletedBook;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
  },
  reducers: {
    addBookR: (state, action) => {
      const newItems = { ...action.payload };
      state.items.push(newItems);
    },
    removeBookR: (state, action) => {
      state.items = state.items.filter(
        (book) => book.item_id !== action.payload,
      );
    },
  },
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      const books = Object.keys(action.payload).map((key) => ({
        ...action.payload[key][0],
        item_id: key,
      }));
      state.items = books;
    },
  },
});

export const { addBookR, removeBookR } = booksSlice.actions;
export default booksSlice.reducer;
