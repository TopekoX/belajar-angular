import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native -> untuk menampilkan encapsulasi propeti di browser.. pilih None untuk menonaktifkan
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element : { type: string; name: string; content: string; } | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
