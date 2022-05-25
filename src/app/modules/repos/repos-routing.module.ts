import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyAuthGuard } from '../auth/guards/only-auth.guard';
import { OwnerDetailsComponent } from './components/owner-details/owner-details.component';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { ReposResolver } from './resolvers/repos.resolver';

const routes: Routes = [
  {
    path: 'repos',
    canActivate: [OnlyAuthGuard],
    resolve: {
      repos: ReposResolver
    },
    children: [
      {
        path: '',
        component: ReposListComponent,
      },
      {
        path: 'owners/:ownerId',
        component: OwnerDetailsComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReposRoutingModule {
}
