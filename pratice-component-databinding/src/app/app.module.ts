import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GanjilComponent } from './ganjil/ganjil.component';
import { GenapComponent } from './genap/genap.component';
import { GamekontrolComponent } from './gamekontrol/gamekontrol.component';

@NgModule({
  declarations: [
    AppComponent,
    GanjilComponent,
    GenapComponent,
    GamekontrolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
