import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ganjil',
  templateUrl: './ganjil.component.html',
  styleUrls: ['./ganjil.component.css']
})
export class GanjilComponent implements OnInit {
  @Input() angka: number | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
