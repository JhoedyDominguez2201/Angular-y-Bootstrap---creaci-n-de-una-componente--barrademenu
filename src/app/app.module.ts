import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarrademenuComponent } from './barrademenu/barrademenu.component';

@NgModule({
  declarations: [
    AppComponent,
    BarrademenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
