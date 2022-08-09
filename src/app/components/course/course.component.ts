import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/course';
import { AuthFacadeService } from 'src/app/services/auth-facade.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  type: string = '';
  id: string = '';
  courses: Post[];
  course: Post;
  reviewForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private auth: AuthFacadeService
  ) {}

  ngOnInit(): void {
    this.setReviewForm();
    this.id = this.route.snapshot.params['id'];
    this.getCourse();
  }

  setReviewForm(): void {
    this.reviewForm = this.fb.group({
      name: [''],
      review: [''],
    });
    //TODO:CHIMI To add review feature
  }

  getCourse(): void{
    this.auth.fetchPost().subscribe((courses) => {
      this.courses = courses;
      let index = this.courses.findIndex(
        (course: any) => course.id === this.id
      );
      if (index > -1) {
        this.course = this.courses[index];
      } else {
        console.log('error');
      }
    });
  }
}
