import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'admin-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent implements OnInit{

  public users: User[] = [];

  constructor( private userService: UserService ){}

  ngOnInit(): void {
    console.log('pasando por el ngInit')
    this.userService.getUsers()
      .subscribe( users => this.users = users )
  }


}
