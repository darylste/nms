import * as yup from 'yup';

import { IMuseum } from './museum.types';

export const CollectionSchema = yup.object().shape({
  name: yup.string().required('A collection must have a name.'),
  // hostMuseum: yup.object().required('A collection must have a host museum.'),

  description: yup
    .string()
    .required('A collection must have a short description.'),
  imgUrl: yup.string().required('A collection must have an image.'),
  imgAlt: yup
    .string()
    .min(5, 'Alternative text must be at least 5 characters')
    .max(40, 'Alternitive text cannot exceed 40 characters.')
    .required('A collection must have image alternative text.'),
});

export interface ICollection {
  name: string;
  slug: string;
  hostMuseum: IMuseum;
  description: string[];
  imgUrl: string;
  imgAlt: string;
}
