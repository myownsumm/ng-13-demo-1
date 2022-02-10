import { Action } from '@ngrx/store';

export const initialState = 0;

export function someReducer(state = initialState, action: Action) {
  switch (action.type) {

    default:
      return state;
  }
}
