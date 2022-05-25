import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs';
import { AuthStateService } from '../services/auth-state.service';
import { loginAttemptAction, LoginAttemptActionPayload, loginAttemptSuccessAction } from './actions';


@Injectable()
export class AuthFeatureEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly authStateService: AuthStateService
  ) {
  }

  loginAttempt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAttemptAction.type),
      map(({payload}: { payload: LoginAttemptActionPayload }) => {
        return loginAttemptSuccessAction({
          payload: {authUser: payload},
        });
      })
    ));

  loginAttemptSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAttemptSuccessAction.type),
      tap(() => this.router.navigate(['/repos']))
    );
  }, {dispatch: false});
}

