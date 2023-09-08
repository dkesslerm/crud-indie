import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'edit/:id',
        canActivate: [ AdminGuard ],
        component: EditPageComponent,
      },
      {
        path: 'new',
        component: EditPageComponent
      },
      {
        path: '',
        component: ListPageComponent
      },
      {
        path: '**',
        redirectTo: ''
      },
    ]
  }

]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ],
})
export class AdminRoutingModule { }
