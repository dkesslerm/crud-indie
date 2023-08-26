import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'admin-edit-user',
  templateUrl: './edit-page.component.html',

})
export class EditPageComponent {

  constructor(private userService: UserService){

  }

}
