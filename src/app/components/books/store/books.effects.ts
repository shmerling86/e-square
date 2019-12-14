import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators'
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as BooksActions from './books.actions';

@Injectable()
export class BooksEffects {

    @Effect()
    public booksStack$ = this.actions$
        .pipe(
            ofType<BooksActions.BooksResults>(BooksActions.BOOKS_RESULTS),
            mergeMap((typedText) => {
                return this.http
                    .get<object[]>(`https://www.googleapis.com/books/v1/volumes?q=${typedText.payload}&maxResults=20`)
                    .pipe(
                        map(data => { return new BooksActions.BooksResultsSuccess(data) }),
                        catchError(error => of(new BooksActions.BooksResultsFailure(error)))
                    )
            }
            )
        )



    constructor(
        private actions$: Actions,
        private http: HttpClient
    ) { }
}

