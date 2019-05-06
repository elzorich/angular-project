import { Pipe, PipeTransform } from '@angular/core';
import { Tour } from './models/tours';

@Pipe({
  name: 'infoFilter'
})
export class InfoFilterPipe implements PipeTransform {

  transform(info: Tour[], selectTour: string): Tour[] {
    if (!info || !selectTour) {
      return info;
    }

    return info.filter(x => x.type === selectTour);
  }

}
