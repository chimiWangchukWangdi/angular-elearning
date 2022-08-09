import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthFacadeService } from 'src/app/services/auth-facade.service';
import { Course, Post } from 'src/app/models/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingCourses: Course[];
  posts: Post[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthFacadeService
  ) {}

  ngOnInit(): void {
    this.getTrendingCourses();
    this.auth.fetchPost().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  getTrendingCourses(): void {
    this.http
      .get('http://localhost:4200/assets/data/trending-courses.json')
      .subscribe((courses) => {
        this.trendingCourses = courses as Course[];
      });
  }

  goToCourse(id: string, title: string): void {
    this.router.navigate(['course', id, title]);
  }
}
