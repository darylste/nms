import React, { FC, Fragment } from 'react';
import Image from 'next/image';
import { Text, Spacer } from '@atomic';
import { IMuseumRowProps } from '@types';

import styles from './MuseumRow.module.scss';

const MuseumRow: FC<IMuseumRowProps> = ({
  orientation,
  location,
  title,
  text,
  imgUrl,
  imgAlt,
}) => {
  return orientation === 'left' ? (
    <Fragment>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={imgUrl}
            alt={imgAlt}
            fill
          />
        </div>
      </div>
      <div className={styles.right}>
        <Text varient='h5'>{location}</Text>
        <Spacer
          top='xs'
          bottom='sm'
        >
          <Text varient='h3'>{title}</Text>
        </Spacer>
        {text.map((paragraph, i) => (
          <Text
            key={i}
            varient='body'
          >
            {paragraph}
          </Text>
        ))}
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div className={styles.left}>
        <Text varient='h5'>{location}</Text>
        <Spacer
          top='xs'
          bottom='sm'
        >
          <Text varient='h3'>{title}</Text>
        </Spacer>
        {text.map((paragraph, i) => (
          <Text
            key={i}
            varient='body'
          >
            {paragraph}
          </Text>
        ))}
      </div>
      <div className={styles.right}>
        {
          <div className={styles.imgContainer}>
            <Image
              src={imgUrl}
              alt={imgAlt}
              fill
            />
          </div>
        }
      </div>
    </Fragment>
  );
};

export default MuseumRow;
