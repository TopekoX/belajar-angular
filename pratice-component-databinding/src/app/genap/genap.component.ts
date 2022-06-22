import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genap',
  templateUrl: './genap.component.html',
  styleUrls: ['./genap.component.css']
})
export class GenapComponent implements OnInit {
  @Input() angka: number | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
