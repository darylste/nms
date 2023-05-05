import React, { FC } from 'react';
import Image from 'next/image';
import { Spacer, Text } from '@atomic';
import { IResultProps } from '@types';

import styles from './ThreeColGrid.module.scss';

interface IThreeColGridProps {
  results: IResultProps[];
}

const ThreeColGrid: FC<IThreeColGridProps> = ({ results }) => {
  return (
    <div className={styles.threeColGrid}>
      {results.map(({ imgUrl, imgAlt, title, location, pageUrl }, i) => (
        <div
          key={i}
          className={styles.result}
        >
          <a href={pageUrl}>
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
              <Text varient='h5'>{title}</Text>
              <Spacer top='2xs'>
                <Text varient='body'>{location}</Text>
              </Spacer>
            </Spacer>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ThreeColGrid;
