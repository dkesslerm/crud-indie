import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, map } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    const userId = route.params['id'];

    return this.userService.getUserById(userId).pipe(
      map((exists) => {
        if (exists) {
          return true;
        } else {
          this.router.navigate(['404']);
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['404']);
        return [false];
      })
    );
  }

}
