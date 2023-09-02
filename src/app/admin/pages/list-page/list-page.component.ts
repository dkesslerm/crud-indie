import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'admin-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent{

  private users: User[] = [];

  get userList(): User[]{
    return this.users;
  }

  public receiveUsers(users: User[]): void{
    this.users = users;
  }
}
