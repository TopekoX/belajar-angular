import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false
  serverCreationStatus = 'No Server was Created'
  serverName = 'Test Server'
  serverCreated = false

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true
    this.serverCreationStatus = 'Server was Created! name is ' + this.serverName
  }

  onUpdateServerName(event: Event) {
    // console.log(event)
    this.serverName =  (<HTMLInputElement>event.target).value
  }
}
