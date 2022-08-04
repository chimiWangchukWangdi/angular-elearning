import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingCourses: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTrendingCourses();
  }


  getTrendingCourses() {
    this.http.get('http://localhost:4200/assets/data/trending-courses.json').subscribe((courses) => {
      this.trendingCourses = courses;
      console.log(this.trendingCourses);
    })
  }
}
