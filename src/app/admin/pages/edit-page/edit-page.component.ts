import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aplicacion, User } from '../../interfaces/user.interface';
import { switchMap } from 'rxjs';

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

  public userForm = new FormGroup({
    password:   new FormControl<string>('', {nonNullable: true}),
    nombre:     new FormControl<string>('', {nonNullable: true}),
    apellidos:  new FormControl<string>('', {nonNullable: true}),
    email:      new FormControl<string>('', {nonNullable: true}),
    aplicacion: new FormControl<Aplicacion>(Aplicacion.INDIe),
  })

  public aplicaciones = [
    {name: 'INDIe'},
  ]

  // public password!: string;
  // private nombre!: string;
  // private apellidos!: string;
  // private email!: string;
  // private aplicacion: string = 'INDIe';

  ngOnInit(): void {
    if (this.router.url.includes('new')) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.userService.getUserById( id )),
      ).subscribe( user => {
        if (!user) return this.router.navigateByUrl('/');

        this.userForm.reset( user );
        return;
      })
  }

  public onSubmit(): void{
    if (this.userForm.invalid) return;

    if (this.currentUser.id){
      this.userService.editUserById(this.currentUser.id)
        .subscribe( user => {
          this.router.navigate(['/'])
        })
    }
  }

  get currentUser(): User{
    const user = this.userForm.value as User;
    return user;
  }



}
