import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course, Post } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  getTrendingCourses(): void {
    this.http
      .get('http://localhost:4200/assets/data/trending-courses.json')
      .subscribe((courses) => {
        return courses as Course[];
      });
  }

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
      .get<{[key: string]: Post}>(
        'https://my-first-project-a6ec0-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
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
