import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'admin-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {

  @Input()
  public users: User[] = [];

  @Output()
  public userEmitter: EventEmitter<User[]> = new EventEmitter();


  constructor( private userService: UserService ){}

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe( users => this.users = users );
  }


}
