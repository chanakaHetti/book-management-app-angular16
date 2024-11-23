import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';

import * as bookActions from './book.actions';
import { BookService } from './book.service';

@Injectable()
export class BookEffects {
  // This is an NgRx Effect that responds to 'AddBook' actions
  addBook$ = createEffect(() =>
    this.actions$.pipe(
      // Listen for actions of type 'AddBook'
      ofType(bookActions.AddBook),
      // For each 'AddBook' action, call 'addBook' on the book service.
      // 'mergeMap' allows multiple concurrent 'addBook' calls.
      mergeMap((action) =>
        this.bookService.addBook(action).pipe(
          // If the 'addBook' call is succesfull, dispatch 'addBookSuccess' action with the book data.
          map((book) => bookActions.AddBookSuccess(book)),
          // If the 'addBook' call fails, dispatch 'addBookFailure' action with the error.
          catchError((error) => of(bookActions.AddBookFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private bookService: BookService) {}
}
