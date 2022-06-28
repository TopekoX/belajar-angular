import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate  {
  server: { id: number; name: string; status: string; } | undefined;
  serverName = '';
  serverStatus = '';
  allowEdit = false
  changeSave = false

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParam: Params) => {
        this.allowEdit = queryParam['allowEdit'] === '1' ? true : false;
      }
    )
    this.route.fragment.subscribe()
    
    this.server = this.serversService.getServer(1);
    this.serverName = this.server!.name;
    this.serverStatus = this.server!.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server!.id, 
      {name: this.serverName, status: this.serverStatus});
    this.changeSave = true
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true
    } 
    if ((this.serverName !== this.server?.name || this.server.status !== this.serverStatus) &&
         !this.changeSave) {
          return confirm('Do you want to discard changes?')
    } else {
      return true
    }
  }
  
}
