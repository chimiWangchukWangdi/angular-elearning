import { Injectable } from '@angular/core';
import { AuthBlService } from './auth-bl.service';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {
  constructor(private blService: AuthBlService) { }
  
  login(uname:string, pword:string): number{
       return this.blService.login(uname, pword);
  }
}
