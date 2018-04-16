import { Injectable } from '@angular/core';
import { User } from './user';



@Injectable()
export class UserService {

  createUser(user : User) {
    let usersStr: string = localStorage.getItem('users');
    if(usersStr) {
      let users : User[] = [];
      users = JSON.parse(usersStr);
      console.log(users);
      users.push(user);
      usersStr = JSON.stringify(users);
      localStorage.setItem('users', usersStr);
      console.log(users);
    }
    else {
      localStorage.setItem('users', JSON.stringify(user));
    }
  }
  constructor() { }

}
