import { createReducer, on } from '@ngrx/store';
import { Repo } from '../repos.typings';
import { reposFetchedAction } from './actions';

export interface ReposFeatureState {
  repos: Repo[]; // TODO. fix typings
}

const authFeatureInitialState: ReposFeatureState = {
  repos: [],
};

export const reposFeatureReducer = createReducer(
  authFeatureInitialState,
  on(reposFetchedAction, (state, {payload}) => ({
    ...state,
    repos: payload.repos, // TODO. combine results?
  })),
);
