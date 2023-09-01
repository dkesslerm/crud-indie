import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'admin-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {

  @Input()
  public users: User[] = [
    {
      "id": "402832f98a28210f018a282133950000",
      "password": "$2a$10$b8BYucBQv47pigg.JIFqeePgZfZi5CpM6QJKEFNmT9N1LqURkey9y",
      "enabled": true,
      "nombre": "David",
      "apellido": "Kessler",
      "email": "dkesslerm@gmail.com",
      "roles": [
          {
              "id": 3,
              "nombre": "ROLE_INDIE_USER"
          }
      ],
      "intentos": 0,
      "avatar": null,
      "topt": false,
      "secret": null
    }
  ];

  @Output()
  public userEmitter: EventEmitter<User[]> = new EventEmitter();

  constructor( private userService: UserService ){}

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe( users => this.users = users );
  }

  tableToFilter(): void{
    this.userEmitter.emit(this.users);
  }


}
