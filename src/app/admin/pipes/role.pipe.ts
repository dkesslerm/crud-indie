import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '../interfaces/user.interface';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(userRoles: Role[]): string {
    let roles: string = '';

    userRoles.forEach( role => roles += role.nombre + " " )

    return roles.replace(' ', ', ');
  }

}
