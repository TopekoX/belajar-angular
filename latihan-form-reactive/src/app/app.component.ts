import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  forbiddenUsernames = ['aprizal', 'gandi']; 

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // method tambahan untuk men-convert ke nilai array agar bisa di proses nilai controlsnya
  // ketika dipanggil pada saat iterasi di page html    
  // read more: https://www.angularfix.com/2022/02/property-does-not-exist-on-type_18.html
  get hobbies(): FormArray {
    return this.signupForm.get('hobbies') as FormArray;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}; 
    }
    return null as any;
  }

}
