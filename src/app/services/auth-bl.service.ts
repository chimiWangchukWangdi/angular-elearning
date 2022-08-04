import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthBlService {
  constructor(private router: Router) { }
  
  login(uname:string, pword:string): number{
    if (uname === 'cww' && pword === '12345'){
      return 200;
    }else{
      return 403;
    }
  }

  logout(): void {
    this.router.navigate(['login']);
  }
}
