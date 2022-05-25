import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { AuthStateService } from '../../auth/services/auth-state.service';
import { Repo } from '../repos.typings';
import { ReposApiService } from '../services/repos-api.service';
import { ReposStateService } from '../services/repos-state.service';

@Injectable()
export class ReposResolver implements Resolve<Repo[]> {
  constructor(private readonly reposApiService: ReposApiService,
              private readonly reposStateService: ReposStateService,
              private readonly authStateService: AuthStateService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Repo[]> {
    return this.reposApiService.getRepos('some', 1).pipe(
      tap(repos => {
        this.reposStateService.setReposFetched(repos);
      })
    );
  }
}
