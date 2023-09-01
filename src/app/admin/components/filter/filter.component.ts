import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterService, MenuItem } from 'primeng/api';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'admin-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit{
  public filterComponents: MenuItem[] = [];


  @Input()
  public users: User[] = [];

  @Output()
  public userEmitter: EventEmitter<User[]> = new EventEmitter();

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.filterComponents = [
      {
        label: 'Activados',
        icon: 'pi pi-check',
      },
      {
        label: 'Desactivados',
        icon: 'pi pi-times'
      },
      {
        label: 'Usuario',
        icon: 'pi pi-user'
      },
      {
        label: 'Administrador',
        icon: 'pi pi-shield'
      }
    ]
  }


  public byEnabled(enabledFlag: boolean): void {

    let filteredUsers: User[] = [];

    this.users.forEach( user => { if( this.filterService.filters['equals'](user.enabled, enabledFlag) ){
        filteredUsers.push(user);
      } });

    this.users = filteredUsers;
  }

  filterToTable(): void{
    this.userEmitter.emit(this.users);
  }

}
