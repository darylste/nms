import { IMuseum } from './museum.types';

interface IReview {
  review: string[];
  imgUrl: string;
  imgAlt: string;
  author: string;
}

export interface IFeature {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
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
  features: IFeature[];
  standardBenefits: string[];
  premiumBenefits: string[];
}
