import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthApiService } from './auth-api.service';
import { AuthBlService } from './auth-bl.service';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {
  constructor(private http:HttpClient, private blService: AuthBlService, private apiService: AuthApiService) { }
  
  login(uname:string, pword:string): number{
    return this.blService.login(uname, pword);
  }

  fetchUrl(type:string): string{
    return this.apiService.fetchUrl(type);
  }

  add(title: string, description: string) {
    return this.apiService.add(title, description);
}

}

