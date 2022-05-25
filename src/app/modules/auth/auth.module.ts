import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthFeatureEffects } from './state/effects';
import { authFeatureReducer } from './state/reducer';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    StoreModule.forFeature('authFeature', authFeatureReducer),
    EffectsModule.forFeature([AuthFeatureEffects]),
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class AuthModule {
}
