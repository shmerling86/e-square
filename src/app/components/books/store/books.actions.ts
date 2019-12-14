import { Action } from '@ngrx/store';

export const BOOKS_RESULTS = '[SEARCH] RESULTS';
export const BOOKS_RESULTS_SUCCESS = '[SEARCH] RESULTS SUCCESS';
export const BOOKS_RESULTS_FAILURE = '[SEARCH] RESULTS FAILURE';

export class BooksResults implements Action {
    readonly type = BOOKS_RESULTS;
    constructor(public payload: string) { }
}

export class BooksResultsSuccess implements Action {
    readonly type = BOOKS_RESULTS_SUCCESS;
    constructor(public payload: object[]) { }
}

export class BooksResultsFailure implements Action {
    readonly type = BOOKS_RESULTS_FAILURE;
    constructor(public payload: Error) { }
}

export type All
    = BooksResults
    | BooksResultsSuccess
    | BooksResultsFailure;