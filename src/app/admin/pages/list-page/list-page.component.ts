import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    this.userService.getUsers()
      .subscribe( (users: User[]) => this.users = users );
  }
}
