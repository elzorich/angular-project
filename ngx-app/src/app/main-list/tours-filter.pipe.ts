import { Pipe, PipeTransform } from '@angular/core';
import { Tour } from '../models/tours';

@Pipe({
    name: 'toursFilter'
  })
  export class ToursFilterPipe implements PipeTransform {

    public transform(tours: Tour[]): string[] {
        const types = tours.map(tour => tour.type);
        const typesUnique = new Set(types);
        return  Array.from(typesUnique.values());
    }

  }
