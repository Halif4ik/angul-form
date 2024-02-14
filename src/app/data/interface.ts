export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  }
}

export interface Quiz {
  id: number;
  description: string;
  frequencyInDay: number;
}
