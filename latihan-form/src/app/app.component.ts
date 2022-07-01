import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm | undefined
  defaultSelection = 'pet'
  answer = ''
  genders = ['male', 'female ']

  // onSubmit(form: NgForm) {
  //   // console.log('Submitted!!!');
  //   console.log(form);   
  // }

  onSubmit() {
    console.log(this.signupForm);
  }

  suggestUserName() {
    const suggestName = 'Superuser'
    /* pakai setValue kalau data yg ingin diganti berupa group */
    // this.signupForm?.setValue({
    //   userData: {
    //     username: suggestName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })

    /* pakai patchValue kalau data yang ingin diganti cuma bagian field tertentu sj */
    this.signupForm?.form.patchValue({
      userData: {
        username: suggestName
      }
    })
  }

}
