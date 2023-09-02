import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent implements OnInit{

  public sidebarVisible: boolean = false;
  public menuItems: MenuItem[] = []

  ngOnInit(): void {
    this.menuItems = [
      { label: 'Listado', icon: 'pi pi-list', routerLink: '/'},
      { label: 'Añadir', icon: 'pi pi-plus', routerLink: 'new' },
    ];
  }



}
