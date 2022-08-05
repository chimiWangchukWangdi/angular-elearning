import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  type: string = '';
  id: number = 0;
  url: string = '';
  courses: any;
  course: any;


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-courses.json';
    }
    this.getCourse();
  }

  getCourse() {
    this.http.get(this.url).subscribe((courses) => {
      this.courses = courses;
      let index = this.courses.findIndex((course: { id: number; }) => course.id == this.id);
      if (index > -1) {
        this.course = this.courses[index]
      }
    });
  }

}
