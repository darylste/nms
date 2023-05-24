import React, { FC } from 'react';
import Image from 'next/image';
import { Spacer, Text } from '@atomic';

import styles from './ThreeColGrid.module.scss';
import { ICollection, IEvent } from 'types';
import Link from 'next/link';

interface IThreeColGridProps {
  results: ICollection[] | IEvent[];
}

const ThreeColGrid: FC<IThreeColGridProps> = ({ results }) => {
  return (
    <div className={styles.threeColGrid}>
      {results.map(({ slug, imgUrl, imgAlt, name, hostMuseum }) => (
        <Link
          key={name}
          href={`/event/${slug}`}
        >
          <div className={styles.result}>
            <Image
              className={styles.resultImg}
              src={imgUrl}
              alt={imgAlt}
              fill
            />
            <Spacer
              top='sm'
              right='sm'
              bottom='sm'
              left='sm'
            >
              <Text varient='h5'>{name}</Text>
              <Spacer top='2xs'>
                <Text varient='body'>{hostMuseum.name}</Text>
              </Spacer>
            </Spacer>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ThreeColGrid;
