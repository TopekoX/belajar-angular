import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[] | undefined

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers
  }

  setToActive(index: number) {
    this.userService.setToActive(index) 
  }

}
