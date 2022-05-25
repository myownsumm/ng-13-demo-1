import { createSelector } from '@ngrx/store';
import { ReposFeatureState } from './reducer';

export interface AppState {
  repos: ReposFeatureState;
}

export const selectFeature = (state: AppState) => state.repos;

export const selectRepos = createSelector(
  selectFeature,
  (state: ReposFeatureState) => state.repos
);
