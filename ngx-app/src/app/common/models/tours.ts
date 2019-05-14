export interface Tour {
    img: string;
    address: string;
    phone: number;   // дополнительно задание pipe для форматирования
    weather: {
       title: string,
       icon: string,
       water: number,
       temperature: number
    };
    social_info: {
       title: string,
       img: string,
       followers: number,
       following: number
    };
    type: string;
  }


