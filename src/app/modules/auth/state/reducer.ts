import { createReducer, on } from '@ngrx/store';
import { AuthUser } from '../auth.typings';
import {
  loginAttemptSuccessAction
} from './actions';

export interface AuthFeatureState {
  authUser: AuthUser | null;
}

const authFeatureInitialState: AuthFeatureState = {
  authUser: null,
};

export const authFeatureReducer = createReducer(
  authFeatureInitialState,
  on(loginAttemptSuccessAction, (state, {payload}) => ({
    ...state,
    authUser: payload.authUser,
  })),
);
