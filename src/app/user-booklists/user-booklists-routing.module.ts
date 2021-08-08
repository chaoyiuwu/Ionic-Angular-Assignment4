import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserBooklistsPage } from './user-booklists.page';

const routes: Routes = [
  {
    path: '',
    component: UserBooklistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserBooklistsPageRoutingModule {}
