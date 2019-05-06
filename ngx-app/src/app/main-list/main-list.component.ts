import { Component, OnInit } from '@angular/core';
import { Tour } from '../models/tours';
import { tours$ } from '../mock/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.styl']
})
export class MainListComponent implements OnInit {

  public tours$: Observable<Tour[]> = tours$;
  public selectTour: string;
  public background = 'assets/images/1.jpg';


  constructor() { }

  ngOnInit() {
  }

}
