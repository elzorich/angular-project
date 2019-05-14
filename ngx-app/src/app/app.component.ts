import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Tour } from './common/models/tours';
import { ToursService } from './common/services/tours.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'ngx-app';

  public tours$: Observable<Tour[]>;
  public selectedTour: Tour;

  public constructor(
    private toursService: ToursService  ) {}

  public ngOnInit(): void {
    this.tours$ = this.toursService.getTours();
  }

  public onClickInfo(tour: Tour) {
    this.selectedTour = tour;
  }

}

