export interface IImage {
  imgUrl: string;
  imgAlt: string;
}

export interface IMuseum {
  name: string;
  slug: string;
  location: string;
  shortDescription: string[];
  longDescription: string[];
  imgUrl: string;
  imgAlt: string;
  imgGallery: IImage[];
}
