import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { AuthFacadeService } from 'src/app/services/auth-facade.service';

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


  constructor(private route: ActivatedRoute, private http: HttpClient, private auth: AuthFacadeService) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = parseInt(this.route.snapshot.params['id']);
    this.url = this.auth.fetchUrl(this.type);
    this.getCourse();
  }

  getCourse(): void {
    this.http.get(this.url).subscribe((courses) => {
      //(res: any) => {
      // this.courses = res;
      //res.forEach((ans: any, index: number) => {
      //if(ans?.id === +this.id){
      //this.course = ans;
      //}
      //});

      this.courses = courses;
      let index = this.courses.findIndex((course: any) => course.id === this.id
      );
      if (index > -1) { 
        this.course = this.courses[index]
      }
    });
  }

}
