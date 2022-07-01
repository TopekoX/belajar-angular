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
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submited = false

  // onSubmit(form: NgForm) {
  //   // console.log('Submitted!!!');
  //   console.log(form);   
  // }

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

  onSubmit() {
    console.log(this.signupForm);
    
    this.submited = true
    this.user.username = this.signupForm?.value.userData.username;
    this.user.email = this.signupForm?.value.userData.email;
    this.user.secretQuestion = this.signupForm?.value.secretQuestion;
    this.user.answer = this.signupForm?.value.answer;
    this.user.gender = this.signupForm?.value.gender;

    this.signupForm?.reset()
  }

}
