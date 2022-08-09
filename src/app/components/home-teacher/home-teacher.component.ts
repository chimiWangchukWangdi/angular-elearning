import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthFacadeService } from 'src/app/services/auth-facade.service';

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.scss'],
})
export class HomeTeacherComponent implements OnInit {

  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthFacadeService
  ) {}

  ngOnInit(): void {
    this.setupCourseForm();
  }

  setupCourseForm(): void{
    this.courseForm = this.fb.group({
      courseTitle: [''],
      courseDesc: [''],
    });
  }

  add(): void{
    this.auth
      .add(
        this.courseForm.get('courseTitle').value,
        this.courseForm.get('courseDesc').value
      )
      .subscribe();
  }
}
