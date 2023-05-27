import React, { FC } from 'react';
import Image from 'next/image';
import { IImage } from '../../../types/museum.types';

import styles from './ImageGallery.module.scss';
interface IImageGalleryProps {
  images: IImage[];
}

const ImageGallery: FC<IImageGalleryProps> = ({ images }) => {
  return (
    <section className={styles.imageGallery}>
      {images.map(({ imgUrl, imgAlt }, i) => (
        <div
          key={i}
          className={styles.imageContainer}
        >
          <Image
            className={styles.image}
            src={`/assets/images/${imgUrl}`}
            alt={imgAlt}
            fill
          />
        </div>
      ))}
    </section>
  );
};

export default ImageGallery;
