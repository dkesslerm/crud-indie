import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Component({
  selector: 'admin-search-page',
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent{

  private userList: User[] = [];
  private selectedUser?: User;

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  public searchById(event: AutoCompleteCompleteEvent): void{


  }

}
