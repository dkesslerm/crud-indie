import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'admin-table',
  templateUrl: './table.component.html',
  providers: [MessageService]
})
export class TableComponent {

  @Input()
  public users: User[] = [];

  constructor( private userService: UserService,
               private router: Router,
               private messageService: MessageService ){}

  public possibleRoles: string[] = ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_INDIE_USER'];


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
