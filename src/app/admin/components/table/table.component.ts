import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'admin-table',
  templateUrl: './table.component.html',
})
export class TableComponent {

  @Input()
  public users: User[] = [];

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
}
