import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListPageComponent
  },
  {
    path: 'edit',
    component: EditPageComponent
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
export class AdminRoutingModule { }
