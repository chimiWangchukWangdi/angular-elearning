import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthApiService } from './auth-api.service';
import { AuthBlService } from './auth-bl.service';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  constructor(
    private http: HttpClient,
    private blService: AuthBlService,
    private apiService: AuthApiService
  ) {}

  login(uname: string, pword: string): Observable<{ status: number }> {
    return this.blService.login(uname, pword);
  }

  getTrendingCourses(): void {
    return this.apiService.getTrendingCourses();
  }

  add(title: string, description: string): Observable<object> {
    return this.apiService.add(title, description);
  }

  fetchPost(): Observable<any> {
    return this.apiService.fetchPost();
  }
}
