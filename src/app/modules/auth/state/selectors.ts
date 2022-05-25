import { createSelector } from '@ngrx/store';
import { AuthFeatureState } from './reducer';

export interface AppState {
  authFeature: AuthFeatureState;
}

export const selectFeature = (state: AppState) => state.authFeature;

export const selectAuthUser = createSelector(
  selectFeature,
  (state: AuthFeatureState) => state.authUser
);
