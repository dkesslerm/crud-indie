import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Role, User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { FilterService, MessageService } from 'primeng/api';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'admin-table',
  templateUrl: './table.component.html',
  providers: [MessageService]
})
export class TableComponent{

  @Input()
  public users: User[] = [];

  constructor( private userService: UserService,
               private messageService: MessageService,
               private filterService: FilterService
  ){}

  filter(role: Role): boolean{
    return this.filterService.filters['contains'](role.nombre, 'ROLE_INDIE_USER');
  }

  public possibleRoles: Role[] = [
    {
      id: 1,
      nombre: 'ROLE_ADMIN'
    },
    {
      id: 2,
      nombre: 'ROLE_USER'
    },
    {
      id: 3,
      nombre: 'ROLE_INDIE_USER'
    }
  ];

  public getSeverity(role: string) {
    switch (role) {
      case 'ROLE_ADMIN':
          return 'danger';

      case 'ROLE_USER':
          return 'success';

      case 'ROLE_INDIE_USER':
          return 'info';
      default:
          return;
    }
  }

  public deactivateUserById(id: string): void{
    this.userService.deactivateUserById(id)
      .subscribe();

    this.messageService.add({ severity: 'info', summary: 'Desactivado correctamente' })

  }

  public activateUserById(id: string): void{
    this.userService.activateUserById(id)
      .subscribe();

    this.messageService.add({ severity: 'success', summary: 'Activado correctamente' })
  }
}
