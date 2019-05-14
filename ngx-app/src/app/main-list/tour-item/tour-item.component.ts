import { Component, Input  } from '@angular/core';
import { Tour } from '../../common/models/tours';

@Component({
  selector: 'app-tour-item',
  templateUrl: './tour-item.component.html',
  styleUrls: ['./tour-item.component.styl']
})
export class TourItemComponent {

  @Input()
  tour: Tour;

}
