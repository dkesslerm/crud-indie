import { NgModule } from '@angular/core';

import { ListPageComponent } from './pages/list-page/list-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RolePipe } from './pipes/role.pipe';
import { EnabledPipe } from './pipes/enabled.pipe';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { TableComponent } from './components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListPageComponent,
    EditPageComponent,
    LayoutPageComponent,
    TableComponent,

    RolePipe,
    EnabledPipe,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule
  ],
  exports: [],
})
export class AdminModule { }
