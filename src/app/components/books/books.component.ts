import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducers';
import * as BooksActions from './store/books.actions';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit, OnDestroy {

  searchText: string = '';
  db: object[];
  pageOfItems: Array<any>;
  bookSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  setTypedSearch(typedText?: string): void {
    if (typedText === '') {
      this.db = [];
      return
    }
    this.store.dispatch(new BooksActions.BooksResults(typedText));
    this.getBooks();
  }

  getBooks(): void {
    this.bookSub = this.store.select('books').subscribe(res => {
      this.db = res.list['items']
    });
  }

  openMoreDetails(book: object): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = book;
    this.dialog.open(DetailsComponent, dialogConfig);
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  ngOnDestroy(): void {
    if (this.bookSub) this.bookSub.unsubscribe();
  }

}
