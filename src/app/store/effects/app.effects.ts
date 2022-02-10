import { Injectable } from '@angular/core';
import {
  Actions,
  Effect
} from '@ngrx/effects';

@Injectable()
export class AppEffects {
  @Effect()
  someEffect$ = this.actions$.pipe();

  constructor(
    private actions$: Actions,
  ) {}
}
