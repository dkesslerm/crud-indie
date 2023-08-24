import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'edit',
    component: EditUserComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class UserRoutingModule { }
