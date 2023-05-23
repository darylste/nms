import React, { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Spacer, Text } from '@atomic';
import { ITwoColGridProps } from '@types';

import styles from './TwoColGrid.module.scss';

const TwoColGrid: FC<ITwoColGridProps> = ({
  orientation,
  subheading,
  heading,
  text = [],
  imgUrl,
  imgAlt,
}) => {
  console.log(text);
  return (
    <div
      className={cn(
        orientation === 'left' ? styles.left : styles.right,
        styles.twoColGrid,
      )}
    >
      <div className={styles.textContainer}>
        <Text varient='h5'>{subheading}</Text>
        <Spacer
          top='xs'
          bottom='sm'
        >
          <Text varient='h3'>{heading}</Text>
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
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={imgUrl}
          alt={imgAlt}
          fill
        />
      </div>
    </div>
  );
};

export default TwoColGrid;
