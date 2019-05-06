import { Observable, of } from 'rxjs';
import {Tour} from '../models/tours';

export const tours$: Observable<Tour[]> = of([
    {
      img: 'https://picsum.photos/500/300/?image=1',
      address: 'address1',
      phone: 23454657345,
      weather: {
        title: 'title1',
        icon: 'cloud',
        water: 14,
        temperature: 20
      },
      social_info: {
        title: 'title1',
        img: 'https://picsum.photos/100/100/?image=23',
        followers: 1,
        following: 1
      },
      type: 'Amsterdam'
    },
    {
      img: 'https://picsum.photos/500/300/?image=3',
      address: 'address2',
      phone: 2312345635,
      weather: {
        title: 'title2',
        icon: 'cloud',
        water: 23,
        temperature: 40
      },
      social_info: {
        title: 'title2',
        img: 'https://picsum.photos/100/100/?image=34',
        followers: 2,
        following: 2
      },
      type: 'Morocco'
    },
    {
      img: 'https://picsum.photos/500/300/?image=235',
      address: 'address3',
      phone: 6453423567,
      weather: {
        title: 'title3',
        icon: 'cloud',
        water: 20,
        temperature: 23
      },
      social_info: {
        title: 'title3',
        img: 'https://picsum.photos/100/100/?image=235',
        followers: 3,
        following: 3
      },
      type: 'Tirol'
    }
  ]);

