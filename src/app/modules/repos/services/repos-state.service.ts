import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Repo } from '../repos.typings';
import { reposFetchedAction } from '../state/actions';
import { ReposFeatureState } from '../state/reducer';

@Injectable()
export class ReposStateService {
  constructor(private readonly store: Store<ReposFeatureState>) {
  }

  public setReposFetched(repos: Repo[]): void {
    this.store.dispatch(reposFetchedAction({payload: {repos}}));
  }

}
