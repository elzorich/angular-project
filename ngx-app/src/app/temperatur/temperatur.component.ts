import { Component, OnInit, Input } from '@angular/core';
import { Tour } from '../models/tours';
import { tours } from '../mock/data';

@Component({
  selector: 'app-temperatur',
  templateUrl: './temperatur.component.html',
  styleUrls: ['./temperatur.component.styl']
})
export class TemperaturComponent implements OnInit {

  @Input()
  tour: Tour;

  constructor() { }

  ngOnInit() {

  }

}
