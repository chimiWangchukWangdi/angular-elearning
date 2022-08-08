import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthFacadeService } from 'src/app/services/auth-facade.service';

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.scss']
})
export class HomeTeacherComponent implements OnInit {

  title: any;
  description: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private auth: AuthFacadeService) { }
  
  courseForm = this.fb.group({
    courseTitle: [''],
    courseDesc: ['']
  });


  ngOnInit(): void {
  }


add() {
  this.title = this.courseForm.get('courseTitle')?.value;
  this.description = this.courseForm.get('courseDesc')?.value;
  this.auth.add(this.title, this.description);
}


}
