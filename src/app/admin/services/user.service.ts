import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environments } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environments.baseURL;
  //private user: User;

  constructor( private http: HttpClient ) { }

  public createUser(user: User): Observable<User>{
    return this.http.post<User>(`${ this.baseUrl }/admin`, user)
  }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${ this.baseUrl }/admin/`);
  }

  public getUserByEmail(email: string): Observable<User>{
    return this.http.get<User>(`${ this.baseUrl }/admin/email/${ email }`);
  }

  public getUserById(id: string): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/admin/${ id }`)
  }

  public getEnabledUsers(enabledFlag: boolean): Observable<User[]>{
    return this.http.get<User[]>(`${ this.baseUrl }/admin/enabled/${ enabledFlag }`);
  }

  // public activateUserById(id: string): Observable<User>{
  //  return this.http.put<User>(`${ this.baseUrl }/admin/activate/${ id }`, this.user);
  // }

  // public deactivateUserById(id: string): Observable<User>{
  //   return this.http.put<User>(`${ this.baseUrl }/admin/deactivate/${ id }`)
  // }

  // public editUserById(id: string): Observable<User>{
  //   return this.http.put<User>(`${ this.baseUrl }/admin/${ id }`);
  // }
}
