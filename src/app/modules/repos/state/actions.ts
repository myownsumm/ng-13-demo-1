import { createAction, props } from '@ngrx/store';
import { Repo } from '../repos.typings';

// export interface LoginAttemptActionPayload {
//   email: string;
//   name: string;
//   password: string;
// }
//
// export const loginAttemptAction = createAction(
//   '[Auth] Login',
//   props<{ payload: LoginAttemptActionPayload }>()
// );
//
// export interface LoginAttemptSuccessActionPayload {
//   authUser: AuthUser;
// }
//
// export const loginAttemptSuccessAction = createAction(
//   '[Auth] Login Attempt Success',
//   props<{ payload: LoginAttemptSuccessActionPayload }>()
// );

export interface ReposFetchedActionPayload {
  repos: Repo[];
}

export const reposFetchedAction = createAction(
  '[Auth] Repos Fetched',
  props<{ payload: ReposFetchedActionPayload }>()
);
