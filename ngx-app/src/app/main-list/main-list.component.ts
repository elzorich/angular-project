
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tour } from '../models/tours';
import { tours$ } from '../mock/data';
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
  public background = 'assets/images/1.jpg';


  constructor() { }

  ngOnInit() {
    this.clickMenu(this.selectTour);
  }


  public clickMenu(tour: string) {
    this.selectTour = tour;

    const filteredTours = this.tours.filter(x => x.type === this.selectTour);

    this.background = filteredTours[0].img;
    console.log(filteredTours[0]);
    this.tourEmitter.emit(filteredTours[0]);
  }

  onClickTour(info: Tour) {
    console.log(info);
    this.background = info.img;
    this.tourEmitter.emit(info);
  }

}
