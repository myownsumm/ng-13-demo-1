import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, map, Observable, switchMap, take, tap } from 'rxjs';
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
    return this.authStateService.getAuthUser$().pipe(
      take(1),
      switchMap((authUser) => {
        const pass = authUser.password;

        return forkJoin([
          this.reposApiService.getRepos(pass[0], 3000),
          this.reposApiService.getRepos(pass[pass.length - 1], 5000),
        ]).pipe(
          map(([reposOne, reposTwo]) => {
            const set = new Set([...reposOne, ...reposTwo]);

            return Array.from(set);
          }),
          tap((items) => this.reposStateService.setReposFetched(items))
        );
      })
    );
  }
}
