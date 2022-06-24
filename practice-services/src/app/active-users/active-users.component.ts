import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[] | undefined

  constructor(private usersService: UserService) { }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers
  }

  setToInactive(index: number) {
    this.usersService.setToInactive(index)
  }

}
