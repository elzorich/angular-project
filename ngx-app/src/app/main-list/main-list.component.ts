
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tour } from '../models/tours';
import { tours, tours$ } from '../mock/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.styl']
})
export class MainListComponent implements OnInit {

  @Input()
  public tours: Tour;

  @Output()
  public tourEmitter = new EventEmitter<Tour>();

  public tours$: Observable<Tour[]> = tours$;
  public selectTour: string;
  public defaultTour = tours[0];
  public background = 'assets/images/1.jpg';


  constructor() { }

  ngOnInit() {
    console.log(this.defaultTour);
    this.defaultTourValues();
    this.clickMenu(this.selectTour);
  }

  public defaultTourValues() {
    this.tourEmitter.emit(this.defaultTour);
  }


  public clickMenu(tour: string) {
    this.selectTour = tour;

    const filteredTours = this.tours.filter(x => x.type === this.selectTour);

    this.background = filteredTours[0].img;
    console.log(filteredTours[0]);
    this.tourEmitter.emit(filteredTours[0]);
  }

  onClickTour(info: Tour) {
    this.background = info.img;
    this.tourEmitter.emit(info);
  }

}
