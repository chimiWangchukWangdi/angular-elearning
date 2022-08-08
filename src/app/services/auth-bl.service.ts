import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthBlService {
  constructor() { }

  login(uname: string, pword: string): number {
    if (uname === 'student' && pword === '123') {
      return 200;
    }
    else if (uname === 'teacher' && pword === '123') {
      return 201;
    }
    else if (uname === 'admin' && pword === '123') {
      return 202;
    }
    else {
      return 403;
    }
  }
}
