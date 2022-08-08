import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthApiService {
    url: string = '';

    constructor(private http: HttpClient) { }

    fetchUrl(type: string): any {
        if (type === 'trending') {
            return this.url = 'http://localhost:4200/assets/data/trending-courses.json';
        }
    }

    add(title: string, description: string) {
        this.http.post('https://my-first-project-a6ec0-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', {
            title: title, description: description
        }).subscribe(responseData => {});
    }

}