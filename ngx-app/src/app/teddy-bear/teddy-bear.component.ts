import { Component, OnInit, Input } from '@angular/core';
import { Tour } from '../models/tours';

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.styl']
})
export class TeddyBearComponent implements OnInit {

  @Input()
  tour: Tour;

  constructor() { }

  ngOnInit() {
  }

}
