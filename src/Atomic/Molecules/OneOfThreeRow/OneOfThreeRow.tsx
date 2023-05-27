import React, { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Button, Spacer, Text } from '@atomic';

import styles from './OneOfThreeRow.module.scss';
export interface IOneOfThreeRowProps {
  orientation: 'left' | 'right';
  imgUrl: string;
  imgAlt: string;
  subheading: string;
  heading: string;
  text: string[];
  btnText: string;
  btnUrl: string;
}

const OneOfThreeRow: FC<IOneOfThreeRowProps> = ({
  orientation,
  imgUrl,
  imgAlt,
  subheading,
  heading,
  text,
  btnText,
  btnUrl,
}) => {
  return (
    <div
      className={cn(
        orientation === 'right' ? styles.right : styles.left,
        styles.row,
      )}
    >
      <div className={styles.imgContainer}>
        <Image
          style={{ objectFit: 'cover' }}
          src={imgUrl}
          alt={imgAlt}
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <Text varient='h5'>{subheading}</Text>
        <Spacer top='xs' />
        <Text varient='h3'>{heading}</Text>
        <Spacer
          top='sm'
          bottom='sm'
        >
          {text.map((para, i) => (
            <Text
              key={i}
              varient='body'
            >
              {para}
            </Text>
          ))}
        </Spacer>
        <Button
          varient='cta'
          href={btnUrl}
          fullWidth
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default OneOfThreeRow;
