import * as BooksActions from './books.actions';

export type Action = BooksActions.All;

export interface booksState {
    searchText?: string,
    list?: object[],
    loading?: boolean,
    error?: Error
}

const defaultState: booksState = {
    searchText: '',
    list: [],
    loading: false,
    error: undefined
}

export function booksReducer(
    state: booksState = defaultState,
    action: BooksActions.All
) {
    switch (action.type) {
        case BooksActions.BOOKS_RESULTS:
            return {
                ...state,
                searchText: action.payload,
                list: [],
                loading: true
            };
        case BooksActions.BOOKS_RESULTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case BooksActions.BOOKS_RESULTS_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
