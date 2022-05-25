import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';


@Injectable()
export class ReposFeatureEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
  ) {
  }
}

