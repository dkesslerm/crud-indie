import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'admin-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent{

  @Output()
  public userEmitter: EventEmitter<User[]> = new EventEmitter();

  public users: User[] = [];

  public emitUserList(): void {
    this.userEmitter.emit(this.users)
  }

  public receiveUsers(users: User[]): void{
    this.users = users;
  }
}
