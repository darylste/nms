import React, { FC } from 'react';
import Image from 'next/image';
import { Spacer, Text } from '@atomic';

import styles from './ThreeColGrid.module.scss';
import { ICollection, IEvent } from 'types';
import Link from 'next/link';

interface IThreeColGridProps {
  results: ICollection[] | IEvent[];
  isClickable: boolean;
}

const ThreeColGrid: FC<IThreeColGridProps> = ({ results, isClickable }) => {
  return (
    <div className={styles.threeColGrid}>
      {results.map(({ slug, imgUrl, imgAlt, name, hostMuseum }) => {
        return isClickable ? (
          <Link
            key={name}
            href={`/event/${slug}`}
          >
            <div className={styles.result}>
              <div className={styles.imgOverlay}>
                <Image
                  className={styles.resultImg}
                  src={`/assets/images/${imgUrl}`}
                  alt={imgAlt}
                  fill
                />
                <div className={styles.textContainer}>
                  <Text varient='h5'>{name}</Text>
                  <Spacer
                    top='2xs'
                    bottom='xs'
                  >
                    <Text varient='body'>{hostMuseum.name}</Text>
                  </Spacer>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div className={styles.result}>
            <div className={styles.imgOverlay}>
              <Image
                className={styles.resultImg}
                src={`/assets/images/${imgUrl}`}
                alt={imgAlt}
                fill
              />
              <div className={styles.textContainer}>
                <Text varient='h5'>{name}</Text>
                <Spacer
                  top='2xs'
                  bottom='xs'
                >
                  <Text varient='body'>{hostMuseum.name}</Text>
                </Spacer>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ThreeColGrid;
