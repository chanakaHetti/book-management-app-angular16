import { createReducer, on } from '@ngrx/store';
import {
  AddBook,
  AddBookSuccess,
  AddBookFailure,
  RemoveBook,
} from './book.actions';
import { Book } from '../models/book';

export const initialState: Book[] = [];

export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state) => state),
  on(AddBookSuccess, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ]),
  on(AddBookFailure, (state, { error }) => {
    console.log('error', error);
    return state;
  }),
  on(RemoveBook, (state, { bookId }) =>
    state.filter((book) => book.id !== bookId)
  )
);
