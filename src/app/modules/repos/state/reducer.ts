import { createReducer, on } from '@ngrx/store';
import { Owner, Repo } from '../repos.typings';
import { reposFetchedAction } from './actions';

export interface ReposFeatureState {
  repos: Repo[];
  owners: Record<number, Owner>;
}

const reposFeatureInitialState: ReposFeatureState = {
  repos: [],
  owners: {},
};

export const reposFeatureReducer = createReducer(
  reposFeatureInitialState,
  on(reposFetchedAction, (state, {payload}) => {
    const repos = payload.repos;
    const uniqueOwners = {};

    repos.forEach(repo => {
      const owner = repo.owner;
      if (!uniqueOwners[owner.id]) {
        uniqueOwners[owner.id] = owner;
      }
    });

    return {
      ...state,
      repos: payload.repos, // TODO. combine results?
      owners: uniqueOwners
    };
  }),
);
