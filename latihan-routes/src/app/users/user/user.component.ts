import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string} | undefined;
  paramSubscription: Subscription | undefined

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.paramSubscription = this.route.params.subscribe(
      (param: Params) => {
        this.user!.id = param['id'];
        this.user!.name = param['name'];
      }
      )
    }
    
  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe()
  }

}
