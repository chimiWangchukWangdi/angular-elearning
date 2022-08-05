import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }
  
  login(uname:string, pword:string): number{
    if (uname === 'student' && pword === '123'){
      return 200;
    }
    else if (uname === 'teacher' && pword === '123'){
      return 201;
    }
    else if (uname === 'admin' && pword === '123'){
      return 202;
    }
    else{
      return 403;
    }
  }

  logout(): void {
    this.router.navigate(['login']);
  }
}
