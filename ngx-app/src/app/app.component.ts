import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements AfterViewInit {
  title = 'ngx-app';

  @ViewChild('imgRef')
  public img: ElementRef;

  public ngAfterViewInit(): void {
    console.log(this.img);
  }

}

