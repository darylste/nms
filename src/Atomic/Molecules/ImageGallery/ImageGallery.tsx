import React, { FC } from 'react';
import Image from 'next/image';

import styles from './ImageGallery.module.scss';

interface IImageProps {
  src: string;
  alt: string;
}

interface IImageGalleryProps {
  images: IImageProps[];
}

const ImageGallery: FC<IImageGalleryProps> = ({ images }) => {
  return (
    <section className={styles.imageGallery}>
      {images.map(({ src, alt }, i) => (
        <div
          key={i}
          className={styles.imageContainer}
        >
          <Image
            className={styles.image}
            src={src}
            alt={alt}
            fill
          />
        </div>
      ))}
    </section>
  );
};

export default ImageGallery;
