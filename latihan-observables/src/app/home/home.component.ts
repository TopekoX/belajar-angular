import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

 private firstObsSubscription: Subscription | undefined 

  constructor() { }

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe( count => {
    //   console.log(count);
    // })
    const customIntervalObservable = new Observable(observer => {
      let count = 0
      setInterval(() => {
        observer.next(count)
        // create fake error
        if (count > 3) {
          observer.error(new Error('Count greater 3!'))
        }
        count++
      }, 1000)
    })

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message)
    })
  }

  ngOnDestroy(): void {
      this.firstObsSubscription?.unsubscribe()
  }

}
