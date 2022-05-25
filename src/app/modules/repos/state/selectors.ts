import { createSelector } from '@ngrx/store';
import { ReposFeatureState } from './reducer';

export interface AppState {
  reposFeature: ReposFeatureState;
}

export const selectFeature = (state: AppState) => state.reposFeature;

export const selectRepos = createSelector(
  selectFeature,
  (state: ReposFeatureState) => state.repos
);

export const selectOwner = (id: number) => createSelector(
  selectFeature,
  (state: ReposFeatureState) => state.owners[id]
);
