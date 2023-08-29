import { NgModule } from '@angular/core';

import { ListPageComponent } from './pages/list-page/list-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [
    ListPageComponent,
    EditPageComponent,
    SearchPageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimeNgModule
  ],
  exports: [],
})
export class AdminModule { }
