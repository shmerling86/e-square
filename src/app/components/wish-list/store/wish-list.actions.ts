import { Action } from '@ngrx/store';

export const ADD_WISH = '[WISH LIST] ADD_WISH';
export const REMOVE_WISH = ' [WISH LIST] REMOVE_WISH';


export class AddWish implements Action {
    readonly type = ADD_WISH;
    constructor(public payload: object) { }
}

export class RemoveWish implements Action {
    readonly type = REMOVE_WISH;
    constructor(public payload: number) { }
}

export type All
    = AddWish
    | RemoveWish;