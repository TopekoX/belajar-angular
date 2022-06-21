import { Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native -> untuk menampilkan encapsulasi propeti di browser.. pilih None untuk menonaktifkan
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input('srvElement') element : { type: string; name: string; content: string; } | undefined
  @Input() titleName: string | undefined 

  constructor() { 
    console.log('Constructor Called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called');
    console.log(changes );
    
  }

  ngOnInit(): void {
    console.log('ngOnInit Called');
  }

  ngDoCheck(): void {
      console.log('ngDoCheck Called');
      
  }

}
