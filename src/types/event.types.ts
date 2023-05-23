import { IMuseum } from './museum.types';

interface IReview {
  review: string[];
  imgUrl: string;
  imgAlt: String;
  author: String;
}

export interface IEvent {
  _id: string;
  name: string;
  slug: string;
  hostMuseum: IMuseum;
  imgUrl: string;
  imgAlt: string;
  dateTime: string;
  description: string[];
  standardAdultPrice: number;
  standardChildPrice: number;
  premiumAdultPrice: number;
  premiumChildPrice: number;
  reviews: IReview[];
}
