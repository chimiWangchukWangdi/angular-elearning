import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {

  constructor(private http: HttpClient) {}

  add(title: string, description: string): Observable<object> {
    return this.http.post(
      'https://my-first-project-a6ec0-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      {
        title: title,
        description: description,
      }
    );
  }

  fetchPost(): Observable<any> {
    return this.http
      .get(
        'https://my-first-project-a6ec0-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((responseData: any) => {
          const postArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
      );
  }
}
