import * as yup from 'yup';

export interface IImage {
  imgUrl: string;
  imgAlt: string;
}

export const MuseumSchemaCreate = yup.object().shape({
  name: yup.string().required('A museum must have a name.'),
  location: yup.string().required('A museum must have a location.'),
  imgUrl: yup.string().required('A museum must have an image.'),
  imgAlt: yup
    .string()
    .min(5, 'Alternative text must be at least 5 characters')
    .max(40, 'Alternitive text cannot exceed 40 characters.')
    .required('A museum must have image alternative text.'),
  shortDescription: yup
    .string()
    .required('A museum needs to have a short description.'),
  longDescription: yup
    .string()
    .required('A museum needs to have a long description.'),
});

export const MuseumSchemaUpdate = yup.object().shape({
  name: yup.string().required('A museum must have a name.'),
  location: yup.string().required('A museum must have a location.'),
  imgUrl: yup.string().required('A museum must have an image.'),
  imgAlt: yup
    .string()
    .min(5, 'Alternative text must be at least 5 characters')
    .max(40, 'Alternitive text cannot exceed 40 characters.')
    .required('A museum must have image alternative text.'),
});

export interface IMuseum {
  _id: string;
  name: string;
  slug: string;
  location: string;
  shortDescription: string[];
  longDescription: string[];
  imgUrl: string;
  imgAlt: string;
  imgGallery: IImage[];
}
