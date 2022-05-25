import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { OwnerDetailsComponent } from './components/owner-details/owner-details.component';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { ReposRoutingModule } from './repos-routing.module';
import { ReposResolver } from './resolvers/repos.resolver';
import { ReposApiService } from './services/repos-api.service';
import { ReposStateService } from './services/repos-state.service';
import { ReposFeatureEffects } from './state/effects';
import { reposFeatureReducer } from './state/reducer';

@NgModule({
  declarations: [ReposListComponent, OwnerDetailsComponent],
  imports: [
    ReposRoutingModule,
    StoreModule.forFeature('reposFeature', reposFeatureReducer),
    EffectsModule.forFeature([ReposFeatureEffects]),
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    CommonModule
  ],
  providers: [
    ReposStateService,
    ReposApiService,
    ReposResolver
  ],
})
export class ReposModule {
}
