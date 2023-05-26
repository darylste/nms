import React, { FC, Fragment } from 'react';
import Image from 'next/image';
import { Text, Spacer } from '@atomic';
import { IMuseum } from 'types';
import styles from './GridRow.module.scss';
interface IGridRowProps {
  museum: IMuseum;
  orientation: 'left' | 'right';
}

const GridRow: FC<IGridRowProps> = ({ museum, orientation }) => {
  return orientation === 'left' ? (
    <Fragment>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={`/public/assets/images/${museum.imgUrl}`}
            alt={museum.imgAlt}
            fill
          />
        </div>
      </div>
      <div className={styles.right}>
        <Text varient='h5'>{museum.location}</Text>
        <Spacer
          top='xs'
          bottom='sm'
        >
          <Text varient='h3'>{museum.name}</Text>
        </Spacer>
        {museum.shortDescription.map((paragraph, i) => (
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
        <Text varient='h5'>{museum.location}</Text>
        <Spacer
          top='xs'
          bottom='sm'
        >
          <Text varient='h3'>{museum.name}</Text>
        </Spacer>
        {museum.shortDescription.map((paragraph, i) => (
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
              className={styles.img}
              src={`/assets/images/${museum.imgUrl}`}
              alt={museum.imgAlt}
              fill
            />
          </div>
        }
      </div>
    </Fragment>
  );
};

export default GridRow;
