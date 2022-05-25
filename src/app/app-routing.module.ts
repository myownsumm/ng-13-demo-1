import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
  },
  // {
  //   path: 'repos',
  //   component: ReposListComponent,
  //   canActivate: [AppGuard],
  //   resolve: [AppResolver],
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'owners',
  //   component: OwnerComponent,
  //   canActivate: [AppGuard],
  //   resolve: [AppResolver],
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
