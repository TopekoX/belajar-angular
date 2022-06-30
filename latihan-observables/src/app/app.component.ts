import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false
  private activatedSub: Subscription | undefined

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.activatedSub = this.userService.activatedEmmiter.subscribe(didActivate => {
        this.userActivated = didActivate
      })
  }

  ngOnDestroy(): void {
      this.activatedSub?.unsubscribe()
  }

}
