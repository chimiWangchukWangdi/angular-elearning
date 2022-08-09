import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthBlService {
  constructor() { }

  login(uname: string, pword: string): Observable<{status: number}> {
    if (uname === 'student' && pword === '123') {
      return of({status: 200});
    }
    else if (uname === 'teacher' && pword === '123') {
      return of({status: 201});
    }
    else if (uname === 'admin' && pword === '123') {
      return of({status: 202});
    }
    else {
      return of({status: 400});
    }
  }
}
