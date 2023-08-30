import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table'
import { AutoCompleteModule } from 'primeng/autocomplete'
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ListboxModule } from 'primeng/listbox'
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card'

@NgModule({
  exports: [
    TableModule,
    AutoCompleteModule,
    MenubarModule,
    ButtonModule,
    ToolbarModule,
    ListboxModule,
    InputTextModule,
    PasswordModule,
    CardModule
  ]
})
export class PrimeNgModule { }
