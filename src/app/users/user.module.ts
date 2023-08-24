import { NgModule } from '@angular/core';

import { ListComponent } from './pages/list/list.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    ListComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [],
})
export class UserModule { }
