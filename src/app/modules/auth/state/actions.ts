import { createAction, props } from '@ngrx/store';
import { AuthUser } from '../auth.typings';

export interface LoginAttemptActionPayload {
  email: string;
  name: string;
  password: string;
}

export const loginAttemptAction = createAction(
  '[Auth] Login',
  props<{ payload: LoginAttemptActionPayload }>()
);

export interface LoginAttemptSuccessActionPayload {
  authUser: AuthUser;
}

export const loginAttemptSuccessAction = createAction(
  '[Auth] Login Attempt Success',
  props<{ payload: LoginAttemptSuccessActionPayload }>()
);
