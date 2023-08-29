import { Component } from '@angular/core';
import { SidebarComponent } from '../../interfaces/sidebar-component.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent {

  public sidebarVisible: boolean = false;
  public sidebarComponents: SidebarComponent[] = [
    { label: 'Listado', icon: 'pi pi-list', url: '' },
    { label: 'Añadir', icon: 'pi pi-plus', url: '' },
    { label: 'Buscar usuario', icon: 'pi pi-search', url: '' },
  ]

  public selectedComponent!: SidebarComponent;
}
