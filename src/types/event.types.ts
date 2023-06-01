import * as yup from 'yup';

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

export const EventSchemaCreate = yup.object().shape({
  name: yup.string().required('An event must have a name.'),
  // hostMuseum: yup.object().required('An event must have a host musuem'),
  imgUrl: yup.string().required('An event must have an image.'),
  imgAlt: yup
    .string()
    .min(5, 'Alternative text must be at least 5 characters')
    .max(40, 'Alternitive text cannot exceed 40 characters.')
    .required('An event must have image alternative text.'),
  description: yup
    .string()
    .min(200, 'A description must be at least 200 characters.')
    .max(1000, 'A description must be 1000 characters or less.')
    .required(),
  standardAdultPrice: yup
    .number()
    .min(0, 'Price must be a possitive number.')
    .required('An event must have a price (can be set to £0)'),
  standardChildPrice: yup
    .number()
    .min(0, 'Price must be a possitive number.')
    .required('An event must have a price (can be set to £0)'),
  premiumAdultPrice: yup
    .number()
    .min(0, 'Price must be a possitive number.')
    .required('An event must have a price (can be set to £0)'),
  premiumChildPrice: yup
    .number()
    .min(0, 'Price must be a possitive number.')
    .required('An event must have a price (can be set to £0)'),
});

export const EventSchemaUpdate = yup.object().shape({
  name: yup.string().required('An event must have a name.'),
  hostMuseum: yup.object().required('An event must have a host musuem'),
  imgUrl: yup.string().required('An event must have an image.'),
  imgAlt: yup
    .string()
    .min(5, 'Alternative text must be at least 5 characters')
    .max(40, 'Alternitive text cannot exceed 40 characters.')
    .required('An event must have image alternative text.'),
});
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
