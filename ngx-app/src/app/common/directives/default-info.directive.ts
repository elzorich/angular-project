import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDefaultInfo]'
})
export class DefaultInfoDirective {

  constructor(elr: ElementRef) {
    elr.nativeElement.src = 'assets/images/1.jpg';
}

}
