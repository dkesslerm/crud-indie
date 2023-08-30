import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'admin-edit-user',
  templateUrl: './edit-page.component.html',

})
export class EditPageComponent implements OnInit {

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  private userForm = new FormGroup({
    password:   new FormControl<string>('', {nonNullable: true}),
    nombre:     new FormControl<string>('', {nonNullable: true}),
    apellidos:  new FormControl<string>('', {nonNullable: true}),
    email:      new FormControl<string>('', {nonNullable: true}),
    aplicacion: new FormControl<string>('INDIe'),
  })

  // public password!: string;
  // private nombre!: string;
  // private apellidos!: string;
  // private email!: string;
  // private aplicacion: string = 'INDIe';

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;
  }

  get currentUser(): User{
    const user = this.userForm.value as User;
    return user;
  }



}
