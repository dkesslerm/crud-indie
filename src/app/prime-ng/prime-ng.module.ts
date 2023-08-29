import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table'
import { AutoCompleteModule } from 'primeng/autocomplete'
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button'

@NgModule({
  exports: [
    TableModule,
    AutoCompleteModule,
    SidebarModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }
