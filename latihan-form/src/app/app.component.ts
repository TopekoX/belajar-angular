import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  onSubmit(form: HTMLFormElement) {
    // console.log('Submitted!!!');
    console.log(form);   
  }

}
