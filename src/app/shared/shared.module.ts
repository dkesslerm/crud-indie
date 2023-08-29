import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Error404pageComponent } from './pages/error404page/error404page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  ],
  declarations: [
    SidenavComponent,
    Error404pageComponent
  ],
})
export class SharedModule { }
