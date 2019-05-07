import { Component} from '@angular/core';
import { Tour } from './models/tours';
import { tours$ } from './mock/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'ngx-app';

  public tours$ = tours$;
  public selectedTour: Tour;

  onClickInfo(tour: Tour) {
    this.selectedTour = tour;
  }

}

