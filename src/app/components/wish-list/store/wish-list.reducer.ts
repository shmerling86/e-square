import * as WishListActions from './wish-list.actions';

export type Action = WishListActions.All;

export interface wishListState {
    wishList: object[];
}

const defaultState: wishListState = {
    wishList: []
}

export function wishListReducer(
    state: wishListState = defaultState,
    action: WishListActions.All
) {

    switch (action.type) {
        case WishListActions.ADD_WISH:
            return {
                ...state,
                wishList: [action.payload, ...state.wishList],
            };

        case WishListActions.REMOVE_WISH:
            return {
                ...state,
                wishList: state.wishList.filter((fv, index) => {
                    return index !== action.payload;
                })
            };
        default:
            return state;
    }
}