import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'home-work';
  // submit(form: any){
  //   console.log(form);
  // }
  form!: FormGroup
  ngOnInit(){
           this.form = new FormGroup({
            login: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z0-9]+]')]),
            email: new FormControl('', [Validators.required, Validators.email], [this.checkEmail]),
            password: new FormControl('',[Validators.required, Validators.minLength(2), Validators.pattern('[a-z A-Z]+$')]),

           })
  }
  submit(){
    console.log(this.form.value);
  }
  checkEmail(control: any): Promise<any> {
    return new Promise((resolve) => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((emails) => {
          if (emails.some((email: any) => email.email === control.value)) {
            control.markAllAsTouched();
            resolve({ uniqEmail: true });
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          console.error('Error fetching emails:', error);
          resolve(null);
        });
    });
  }
}