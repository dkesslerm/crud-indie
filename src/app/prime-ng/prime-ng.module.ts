import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table'
import { AutoCompleteModule } from 'primeng/autocomplete'
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ListboxModule } from 'primeng/listbox'

@NgModule({
  exports: [
    TableModule,
    AutoCompleteModule,
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    ListboxModule
  ]
})
export class PrimeNgModule { }
