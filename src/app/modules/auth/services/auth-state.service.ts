import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthUser } from '../auth.typings';
import { loginAttemptAction, LoginAttemptActionPayload } from '../state/actions';
import { selectAuthUser } from '../state/selectors';

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

  public getAuthUser$(): Observable<AuthUser> {
    return this.store.select(selectAuthUser);
  }
}
