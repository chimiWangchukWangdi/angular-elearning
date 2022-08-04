import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-Learning';
  constructor( private fb : FormBuilder){}

    signupForm = this.fb.group({
    Name: [''],
    Email: [''],
    Password: ['']
  })

  onSubmit(){
    console.log(this.signupForm.value);
  }
}
