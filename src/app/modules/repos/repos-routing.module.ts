import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyAuthGuard } from '../auth/guards/only-auth.guard';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { ReposResolver } from './resolvers/repos.resolver';

const routes: Routes = [
  {
    path: 'repos',
    children: [
      {
        path: '',
        component: ReposListComponent,
        canActivate: [OnlyAuthGuard],
        resolve: {
          repos: ReposResolver
        }
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
