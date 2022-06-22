import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamekontrol',
  templateUrl: './gamekontrol.component.html',
  styleUrls: ['./gamekontrol.component.css']
})
export class GamekontrolComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>()
  interval: any
  lastNumber = 0

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1)
      this.lastNumber++
    }, 1000)
  }

  onPauseGame() {
    clearInterval(this.interval)
  }

}
