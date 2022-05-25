import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Owner, Repo } from '../repos.typings';
import { reposFetchedAction } from '../state/actions';
import { AppState, selectOwner, selectRepos } from '../state/selectors';

@Injectable()
export class ReposStateService {
  constructor(private readonly store: Store<AppState>) {
  }

  public setReposFetched(repos: Repo[]): void {
    this.store.dispatch(reposFetchedAction({payload: {repos}}));
  }

  public getReposList$(): Observable<Repo[]> {
    return this.store.select(selectRepos);
  }

  public getOwner$(id: number): Observable<Owner> {
    return this.store.select(selectOwner(id));
  }
}
