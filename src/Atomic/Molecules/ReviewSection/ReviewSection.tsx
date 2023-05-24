import React, { FC } from 'react';
import Image from 'next/image';
import { Spacer, Text } from '@atomic';
import icon from '../../../../public/assets/icons/quotes.svg';

import styles from './ReviewSection.module.scss';

export interface IReviewSectionProps {
  img: string;
  imgAlt: string;
  text: string[];
  author: string;
}

const ReviewSection: FC<IReviewSectionProps> = ({
  img,
  imgAlt,

  text,
  author,
}) => {
  return (
    <div className={styles.reviewSection}>
      <div className={styles.imgContainer}>
        <Image
          src={img}
          alt={imgAlt}
          fill
        />
      </div>
      <div className={styles.review}>
        <Spacer
          top='lg'
          bottom='lg'
        >
          <Image
            src={icon}
            alt='quotes icon'
            width={60}
            height={60}
          />
          <Spacer
            top='sm'
            bottom='sm'
          >
            {text.map((paragraph, i) => (
              <Text
                key={i}
                varient='body'
              >
                {paragraph}
              </Text>
            ))}
          </Spacer>
          <Text varient='h6'>{author}</Text>
        </Spacer>
      </div>
    </div>
  );
};

export default ReviewSection;
