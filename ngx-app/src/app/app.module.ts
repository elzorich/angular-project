import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToursService } from './common/services/tours.service';
import { MainListComponent } from './main-list/main-list.component';
import { TemperaturComponent } from './temperatur/temperatur.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { ToursFilterPipe } from './common/pipes/tours-filter.pipe';
import { InfoFilterPipe } from './common/pipes/info-filter.pipe';
import { TourItemComponent } from './main-list/tour-item/tour-item.component';
import { DefaultInfoDirective } from './common/directives/default-info.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    TemperaturComponent,
    TeddyBearComponent,
    ToursFilterPipe,
    InfoFilterPipe,
    TourItemComponent,
    DefaultInfoDirective

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [
    { provide: ToursService, useClass: ToursService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
