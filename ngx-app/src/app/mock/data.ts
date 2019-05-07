import { Observable, of } from 'rxjs';
import {Tour} from '../models/tours';

export const tours: Tour[] = [
  {
    img: 'https://picsum.photos/500/300/?image=77',
    address: 'Address-77',
    phone: 7788991122,
    weather: {
      title: 'title-77',
      icon: 'cloud',
      water: 23,
      temperature: 30
    },
    social_info: {
      title: 'title-12',
      img: 'https://picsum.photos/100/100/?image=54',
      followers: 23343,
      following: 30
    },
    type: 'Rome'
  },
  {
    img: 'https://picsum.photos/500/300/?image=547',
    address: 'Address-we7',
    phone: 56454773356,
    weather: {
      title: 'Title-qwertz',
      icon: 'cloud',
      water: 25,
      temperature: 35
    },
    social_info: {
      title: 'Title-werwer',
      img: 'https://picsum.photos/100/100/?image=111',
      followers: 45343,
      following: 2342
    },
    type: 'Rome'
  },
    {
      img: 'https://picsum.photos/500/300/?image=1',
      address: 'address1',
      phone: 23454657345,
      weather: {
        title: 'title-21',
        icon: 'cloud',
        water: 14,
        temperature: 20
      },
      social_info: {
        title: 'title-51',
        img: 'https://picsum.photos/100/100/?image=23',
        followers: 1,
        following: 1
      },
      type: 'Amsterdam'
    },
    {
      img: 'https://picsum.photos/500/300/?image=65',
      address: 'address23',
      phone: 23454657345,
      weather: {
        title: 'title-51',
        icon: 'cloud',
        water: 15,
        temperature: 24
      },
      social_info: {
        title: 'title-4',
        img: 'https://picsum.photos/100/100/?image=163',
        followers: 1,
        following: 1
      },
      type: 'Amsterdam'
    },
    {
      img: 'https://picsum.photos/500/300/?image=95',
      address: 'address-23',
      phone: 17938204892,
      weather: {
        title: 'title-95',
        icon: 'cloud',
        water: 25,
        temperature: 34
      },
      social_info: {
        title: 'title-45',
        img: 'https://picsum.photos/100/100/?image=153',
        followers: 454645,
        following: 340
      },
      type: 'Palma'
    },
    {
      img: 'https://picsum.photos/500/300/?image=345',
      address: 'Address-435',
      phone: 464574574754,
      weather: {
        title: 'Title-1122',
        icon: 'cloud',
        water: 26,
        temperature: 38
      },
      social_info: {
        title: 'Title-455',
        img: 'https://picsum.photos/100/100/?image=123',
        followers: 34567,
        following: 111
      },
      type: 'Palma'
    },
    {
      img: 'https://picsum.photos/500/300/?image=661',
      address: 'address2',
      phone: 2312345635,
      weather: {
        title: 'title-42',
        icon: 'cloud',
        water: 23,
        temperature: 40
      },
      social_info: {
        title: 'title-72',
        img: 'https://picsum.photos/100/100/?image=34',
        followers: 2,
        following: 2
      },
      type: 'Morocco'
    },
    {
      img: 'https://picsum.photos/500/300/?image=235',
      address: 'Address3',
      phone: 6453423567,
      weather: {
        title: 'Title-63',
        icon: 'cloud',
        water: 20,
        temperature: 23
      },
      social_info: {
        title: 'Title-13',
        img: 'https://picsum.photos/100/100/?image=265',
        followers: 23434,
        following: 1243
      },
      type: 'Tirol'
    }
  ];

export const tours$: Observable<Tour[]> = of(tours);

