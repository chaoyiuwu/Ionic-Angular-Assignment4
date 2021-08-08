import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserBooklistsPageRoutingModule } from './user-booklists-routing.module';

import { UserBooklistsPage } from './user-booklists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserBooklistsPageRoutingModule
  ],
  declarations: [UserBooklistsPage]
})
export class UserBooklistsPageModule {}
