import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginAttemptAction, LoginAttemptActionPayload } from '../state/actions';

@Injectable({providedIn: 'root'})
export class AuthStateService {
  constructor(private readonly store: Store) {
  }

  public loginAttempt(payload: LoginAttemptActionPayload): void {
    this.store.dispatch(
      loginAttemptAction({
        payload,
      })
    );
  }
}
