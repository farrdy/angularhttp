import { Geo } from './interface/geo';
import { User } from './interface/user';
import { UserService } from './service/user.service';
import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angularhttp';

  constructor(private userService: UserService) {}

  private faraiUser: User = {
    name: 'Fatso',
    username: 'fatso1000',
    email: 'fatso@gmail.com',
    phone: '23232332323',
    website: 'www.rapidbytes.com',
    company: { name: 'Rapidbytes', catchPhrase: 'Fun fun', bs: 'dsdsdsd' },
    address: {
      city: 'Johannesburg',
      street: '35 Church street',
      zipcode: '2323',
      suite: 'unit 10',
      geo: {
        lat: '-37.3146',
        lng: '81.6565',
      },
    },
  };
  private updateThisUser: User = {
    id: 10,
    name: 'Fatso1',
    username: 'fatso1000',
    email: 'fatso@gmail.com',
    phone: '23232332323',
    website: 'www.rapidbytes.com',
    company: { name: 'Rapidbytes', catchPhrase: 'Fun fun', bs: 'dsdsdsd' },
    address: {
      city: 'Johannesburg',
      street: '35 Church street',
      zipcode: '2323',
      suite: 'unit 10',
      geo: {
        lat: '-37.3146',
        lng: '81.6565',
      },
    },
  };
  private patchThisUser: any = {
    id: 10,
    name: 'Fabian',
    username: 'Fabian1000',
    email: 'fatso@gmail.com',
    phone: '23232332323',
  };

  ngOnInit(): void {
    // this.onUpdateUser();
    // this.onGetUsers();
    // this.onPatchUser();
    // this.onDeleteUser();
    this.onGetUser();
    // this.onCreateUser();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('Done getting users')
    );
  }
  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting users')
    );
  }
  onCreateUser() {
    this.userService.createUser(this.faraiUser).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating user')
    );
  }

  onUpdateUser() {
    this.userService.updateUser(this.updateThisUser).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating user')
    );
  }

  onPatchUser() {
    this.userService.patchUser(this.patchThisUser).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating user')
    );
  }

  onDeleteUser() {
    this.userService.deleteUser(10).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done deleting user')
    );
  }
  //Experimenting with observables---Add the commented code below to the constructor
  // type HttpResponse = { code: number; data: string };
  // const observable = new Observable<HttpResponse>((subscriber) => {
  //   console.log('Inside subscriber..');
  //   subscriber.next({ code: 200, data: 'this is data 1' });
  //   subscriber.next({ code: 200, data: 'this is data 2' });
  //   subscriber.next({ code: 200, data: 'this is data 3' });
  //   // subscriber.error({ code: 500, msg: 'An error occured' }); this will prevent the complete portion
  //   setTimeout(() => {
  //     subscriber.next({ code: 200, data: 'this is more data' });
  //   }, 3 * 1000);
  //   console.log('subscriber is done emmitting');
  // });
  // observable.subscribe({
  //   next(response: HttpResponse) {
  //     console.log('get response', response);
  //   },
  //   error(error: any) {
  //     console.error('something wrong occured:', error);
  //   },
  //   complete() {
  //     console.log('done');
  //   },
  // });
  //}
}
