import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AddBook, RemoveBook } from '../books/book.actions';
import { AppState } from '../app.state';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.books$ = store.pipe(select('book'));
  }

  addBook(id: string, title: string, author: string): void {
    this.store.dispatch(AddBook({ id, title, author }));
  }

  removeBook(bookId: string): void {
    this.store.dispatch(RemoveBook({ bookId }));
  }
}
