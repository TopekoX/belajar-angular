import { Component, 
          Input, 
          OnInit, 
          ViewEncapsulation, 
          OnChanges, 
          SimpleChanges, 
          DoCheck, 
          AfterContentInit, 
          AfterContentChecked,
          AfterViewInit,
          AfterViewChecked, 
          OnDestroy,
          ContentChild,
          ElementRef} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native -> untuk menampilkan encapsulasi propeti di browser.. pilih None untuk menonaktifkan
})
export class ServerElementComponent implements 
        OnInit, 
        OnChanges, 
        DoCheck, 
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy {
  @Input('srvElement') element : { type: string; name: string; content: string; } | undefined
  @Input() titleName: string | undefined 
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef | undefined 

  constructor() { 
    console.log('Constructor Called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called');
    console.log(changes );
    
  }

  ngOnInit(): void {
    console.log('ngOnInit Called');
    console.log('Text Content On Paragraph: ' + this.paragraph?.nativeElement.textContent);
  }

  ngDoCheck(): void {
      console.log('ngDoCheck Called');
      
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called');  
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called');
    console.log('Text Content On Paragraph: ' + this.paragraph?.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called');
  }

}
