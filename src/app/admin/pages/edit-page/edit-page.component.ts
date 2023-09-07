import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aplicacion, Role, User } from '../../interfaces/user.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'admin-edit-page',
  templateUrl: './edit-page.component.html',

})
export class EditPageComponent implements OnInit{

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  public userForm = new FormGroup({
    nombre: new FormControl<string>(''),
    apellido:  new FormControl<string>(''),
    email:      new FormControl<string>(''),
    password:   new FormControl<string>(''),

    id:         new FormControl<string>(''),
    enabled:    new FormControl<boolean>(true),
    roles:      new FormControl<Role[]>([]),
    intentos:   new FormControl<number>(0),
    avatar:     new FormControl<null>(null),
    topt:       new FormControl<boolean>(false),
    secret:     new FormControl<null>(null),
    aplicacion: new FormControl<Aplicacion>(Aplicacion.INDIe),
  })

  public aplicaciones = [
    {name: 'INDIe'},
  ]

  get currentUser(): User {
    const user = this.userForm.value as User;
    return user;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.userService.getUserById( id )),
      ).subscribe( user => {
        if (!user) return this.router.navigateByUrl('/');

        this.userForm.reset( user );
        return;
      })
  }

  onSubmit(): void{
    if (!this.userForm.invalid) return;

    if (this.currentUser.id) {
      this.userService.editUserById(this.currentUser.id, this.currentUser)
        .subscribe( hero => {
          this.router.navigate(['heroes'])
        });

      return;
    }

    this.userService.createUser( this.currentUser )
      .subscribe(user => {
        this.router.navigate(['admin/edit', user.id])
      });
  }
}
