
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tour } from '../common/models/tours';
import { ToursService } from '../common/services/tours.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.styl']
})

export class MainListComponent implements OnInit {

  @Input()
  public tours: Tour[];

  @Output()
  public tourEmitter = new EventEmitter<Tour>();

  public tours$: Observable<Tour[]>;
  public selectTour: string;
  // public defaultTour = tours[0];
  public background = 'assets/images/1.jpg';


  public constructor(
    private toursService: ToursService  ) {}

  public ngOnInit(): void {
    this.tours$ = this.toursService.getTours();
    // this.defaultTourValues();
  }

  public defaultTourValues() {
    this.tourEmitter.emit();
  }


  public clickMenu(tour: string): void {
    this.selectTour = tour;
    const filteredTours = this.tours.filter(x => x.type === this.selectTour);
    this.background = filteredTours[0].img;
    this.tourEmitter.emit(filteredTours[0]);
  }

  public onClickTour(info: Tour): void {
    this.background = info.img;
    this.tourEmitter.emit(info);
  }

}
