import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { AppService } from './services/app.service';
import { ReposComponent } from './components/repos/repos.component';
import { someReducer } from './store/reducers/app.reducer';
import { OwnerComponent } from './components/owner/owner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({someReducer: someReducer}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AuthModule
  ],
  declarations: [
    AppComponent,
    ReposComponent,
    OwnerComponent,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
