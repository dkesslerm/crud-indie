import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table'
import { AutoCompleteModule } from 'primeng/autocomplete'
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox'
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card'
import { DropdownModule} from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast'
import { MultiSelectModule } from 'primeng/multiselect'

@NgModule({
  exports: [
    TableModule,
    AutoCompleteModule,
    MenubarModule,
    ButtonModule,
    ListboxModule,
    InputTextModule,
    PasswordModule,
    CardModule,
    DropdownModule,
    DividerModule,
    TagModule,
    MultiSelectModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
