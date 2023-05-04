import React, { FC, Fragment } from 'react';
import Image from 'next/image';
import { Text, Spacer } from '@atomic';

import styles from './FeaturedSection.module.scss';
interface IEvents {
  title: string;
  imgUrl: string;
  imgAlt: string;
  eventUrl: string;
}

interface IFeaturedSectionProps {
  title: string;
  text: string[];
  events: IEvents[];
}

const FeaturedSection: FC<IFeaturedSectionProps> = ({
  title,
  text,
  events,
}) => {
  return (
    <div className={styles.featuredSection}>
      <div className={styles.left}>
        <Spacer
          top='sm'
          bottom='sm'
        >
          <Text varient='h2'>{title}</Text>
          <Spacer top='sm' />
          {text.map((paragraph, i) => (
            <Fragment key={i}>
              <Text varient='body'>{paragraph}</Text>
              <Spacer top='xs' />
            </Fragment>
          ))}
        </Spacer>
      </div>
      <div className={styles.right}>
        {events.map(({ title, imgUrl, imgAlt, eventUrl }, i) => (
          <a
            key={i}
            className={styles.imgContainer}
            href={eventUrl}
          >
            <Image
              src={imgUrl}
              alt={imgAlt}
              fill
            />
            <Text varient='h5'>TEXT</Text>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
