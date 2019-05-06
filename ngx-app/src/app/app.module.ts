import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainListComponent } from './main-list/main-list.component';
import { TemperaturComponent } from './temperatur/temperatur.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { ToursFilterPipe } from './main-list/tours-filter.pipe';
import { InfoFilterPipe } from './info-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainListComponent,
    TemperaturComponent,
    TeddyBearComponent,
    ToursFilterPipe,
    InfoFilterPipe

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
