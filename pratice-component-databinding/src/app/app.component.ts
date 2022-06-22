import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  angkaGanjil: number[] = []
  angkaGenap: number[] = []

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.angkaGenap.push(firedNumber)
    } else {
      this.angkaGanjil.push(firedNumber)
    }
  }
}
