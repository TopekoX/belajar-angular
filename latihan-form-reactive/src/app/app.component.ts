import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
        'email': new FormControl(null, [Validators.required, Validators.email], <AsyncValidatorFn>this.forbiddenEmails) // fix from : https://stackoverflow.com/questions/58903484/angular-8-not-assignable-to-asyncvalidatorfn
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    // set default value
    this.signupForm.setValue({
      'userData': {
        'username': 'ucup',
        'email': 'ucup@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    // update value
    this.signupForm.patchValue({
      'userData': {
        'username': 'abu'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    // reset all not working for select option gender
    // this.signupForm.reset() 

    // reset specific
    this.signupForm.get('userData.username')?.reset();
    this.signupForm.get('userData.email')?.reset();
    this.signupForm.get('gender')?.setValue('male');
    this.signupForm.get('hobbies')?.reset();
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

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, rejects) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  } 

}
