import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SuccessComponent } from './alert/success.component';
import { WarningComponent } from './alert/warning.component';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
