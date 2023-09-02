import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '../interfaces/user.interface';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(userRoles: Role[]): string {
    let roles: string = '';

    if (userRoles.length > 1){
      userRoles.forEach( role => roles += role.nombre + " " )

      return roles.replace(' ', ', ');
    }
    else {
      roles += userRoles.at(0)?.nombre;
      return roles
    }

  }

}
