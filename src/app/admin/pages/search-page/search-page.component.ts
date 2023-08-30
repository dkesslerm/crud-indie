import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-search-page',
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent implements OnInit{

  value: string | undefined;
  private searchInput = new FormControl();
  private users: User[] = [];
  private selectedUser?: User;
  private formGroup = new FormGroup({ searchInput: new FormControl<object|null>(null) });
  constructor(
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
        this.users = users;
    });
  }


}


