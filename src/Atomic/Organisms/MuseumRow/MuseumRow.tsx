import React, { FC, Fragment } from 'react';
import Text from '../../Atoms/Text/Text';
import Spacer from '../../Atoms/Spacer/Spacer';
import Image from 'next/image';

import styles from './MuseumRow.module.scss';

interface IMuseumRowProps {
  orientation: 'left' | 'right';
  location: string;
  title: string;
  text: string[];
  imgUrl: string;
  imgAlt: string;
}

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
