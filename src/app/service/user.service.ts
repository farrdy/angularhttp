import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private baseApiUrl = environment.baseApiUrl;

  getUser(): Observable<User> {
    // const myHttpHeader = new HttpHeaders({ name: 'John Doe' });
    let myHttpHeader = new HttpHeaders({ name: 'John Doe' }); //https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept
    myHttpHeader.append('class', 'first'); //this will not be applied since HttpHeaders is  immutable  but will only  work as per below syntax
    myHttpHeader = myHttpHeader.set('ipkey', 'dfdfdfdf');
    myHttpHeader = myHttpHeader.set('contact-details', [
      'john@gmail.com',
      '075846325',
      'Johanesburg',
      'South Africa',
    ]); //Can also pass an array of header values
    myHttpHeader = myHttpHeader.append('ipkey', 'reredsf'); //adds an additional value to the  same given key
    myHttpHeader = myHttpHeader.set('ipkey', '4532545'); //overrides the existing key is its exists
    myHttpHeader = myHttpHeader.set('name-surname', 'Motsi F'); //overrides the existing key is its exists

    //using htp params
    let myparams = new HttpParams()
      .set('PassportNumber', 'BN23434')
      .set('CountryOfIssue', 'Zimbabwe');

    myparams = myparams
      .append('name', 'John Doe')
      .append('email', 'jdoe@gmail.com');

    return this.http.get<User>(`${this.baseApiUrl}/users/1`, {
      headers: myHttpHeader,
      params: myparams,
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseApiUrl}/users`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseApiUrl}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseApiUrl}/users/${user.id}`, user);
  }

  patchUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.baseApiUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<unknown> {
    return this.http.delete<unknown>(`${this.baseApiUrl}/users/${id}`);
  }
}
