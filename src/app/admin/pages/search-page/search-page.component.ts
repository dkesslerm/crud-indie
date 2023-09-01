import { Component, OnInit, Pipe } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-search-page',
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent implements OnInit{

  public searchInput = new FormControl();
  private users: User[] = [];
  private selectedUser?: User;

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
        this.users = users;
    });
  }

  searchUser(): void{
    const value: string = this.searchInput.value || '';

    if (this.router.url.includes('search-by-email')){
      this.userService.getUserByEmail(value)
        .subscribe( user => this.selectedUser = user);
    } else {
      this.userService.getUserById(value)
        .subscribe ( user => this.selectedUser = user);
    }
  }

}


