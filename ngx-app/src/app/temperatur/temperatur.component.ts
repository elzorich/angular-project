import { Component, OnInit, Input } from '@angular/core';
import { Tour } from '../common/models/tours';

@Component({
  selector: 'app-temperatur',
  templateUrl: './temperatur.component.html',
  styleUrls: ['./temperatur.component.styl']
})
export class TemperaturComponent {

  @Input()
  tour: Tour;

}
