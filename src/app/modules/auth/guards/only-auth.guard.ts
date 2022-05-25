import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthStateService } from '../services/auth-state.service';

@Injectable({ providedIn: 'root' })
export class OnlyAuthGuard implements CanActivate {
  constructor(
    private readonly authStateService: AuthStateService,
    private readonly router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authStateService.getAuthUser$().pipe(
      map((authUser) => {
        if (!authUser) {
          this.router.navigate(['/auth']);
        }

        return !!authUser;
      })
    );
  }
}
