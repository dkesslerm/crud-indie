import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'admin-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent implements OnInit{

  public users: User[] = [
    {
        "id": "402832f98a28210f018a282133950000",
        "password": "$2a$10$b8BYucBQv47pigg.JIFqeePgZfZi5CpM6QJKEFNmT9N1LqURkey9y",
        "enabled": false,
        "nombre": "David",
        "apellido": "Kessler",
        "email": "dkesslerm@gmail.com",
        "roles": [
            {
              "id": 3,
              "nombre": "ROLE_INDIE_USER"
            },
            {
              "id": 1,
              "nombre": "ROLE_USER"
            }

        ],
        "intentos": 0,
        "avatar": null,
        "topt": false,
        "secret": null
      }
  ];

  constructor( private userService: UserService ){}

  ngOnInit(): void {
    console.log('pasando por el ngInit')
    this.userService.getUsers()
      .subscribe( users => this.users = users )
  }


}
