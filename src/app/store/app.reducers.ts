import { ActionReducerMap } from '@ngrx/store';

import * as fromBooks from '../components/books/store/books.reducer';
import * as fromWishList from '../components/wish-list/store/wish-list.reducer';

export interface AppState {
    readonly books: fromBooks.booksState,
    readonly wishList: fromWishList.wishListState
}

export const appReducer: ActionReducerMap<AppState> = {
    books: fromBooks.booksReducer,
    wishList: fromWishList.wishListReducer
};