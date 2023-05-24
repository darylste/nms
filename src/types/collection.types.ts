import { IMuseum } from './museum.types';

export interface ICollection {
  name: string;
  slug: string;
  hostMuseum: IMuseum;
  description: string[];
  imgUrl: string;
  imgAlt: string;
}
