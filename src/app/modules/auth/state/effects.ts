import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthStateService } from '../services/auth-state.service';


@Injectable()
export class AuthFeatureEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly authStateService: AuthStateService
  ) {
  }

}

